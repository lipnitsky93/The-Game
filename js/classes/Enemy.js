import {Hero} from './Hero';
import {animationEnemyWalk} from '../animations';
import {animationEnemyAttack} from '../animations';
import {canvas, ctx, canvas2, ctx2, TO_RADIANS} from '../constants';
import {enemyNameAdv, enemyNameRace, enemyName} from '../constants';
import {SpriteEnemyContainer} from '../classes/SpriteEnemyContainer';

class Enemy extends Hero {
    constructor() {
        super();
        this.context = ctx2;
        this.name;
        this.animation = animationEnemyWalk;
    }
    
    draw() {
        this.context.clearRect(0, 0, 1600, 800);
        if (this.currentCountFrame === this.animation.frames.length) {
            this.currentCountFrame = 0;
        }
        const frame = this.animation.frames[this.currentCountFrame];
       
        frame.parts.forEach(
            (item, i) => {
                const currView = this.view[item.name];
                
                this.context.save();
                
                this.context.translate(this.x + item.x, this.y + item.y);
                
                this.context.translate(currView.width / 10, currView.height / 10);
               
                this.context.scale(-1,1);
                this.context.rotate(item.rotation * TO_RADIANS);
                
                this.context.drawImage(currView, -currView.width / 10, -currView.height / 10, currView.width / 5, currView.height / 5);
                this.context.restore();
            }
        )
        this.currentCountFrame ++;  
    }

    setView() {
        this.view = new SpriteEnemyContainer();
    }

    setName() {
        const selfNameAdv = enemyNameAdv[_.random(enemyNameAdv.length - 1)];
        const selfNameRace = enemyNameRace[_.random(enemyNameRace.length - 1)];
        const selfName = enemyName[_.random(enemyName.length - 1)];
        this.name = `${selfNameAdv} ${selfNameRace} ${selfName}`;
    }

    walk(n, start, end) {
        if (this.tick_count > n) {
            this.setPosition(start, 500);
            this.draw();
            if (start > end) {
            start -= 15;
            } 
            this.tick_count = 0;
            if (start > end) {
                var reqId = requestAnimationFrame(this.walk.bind(this, n, start, end));
            } else {
            cancelAnimationFrame(reqId);
            this.currentCountFrame = 0;
            this.draw();
            }
            console.log(reqId);
        } else {
            this.tick_count += 1;
            requestAnimationFrame(this.walk.bind(this, n, start, end));
        }
    }
}

function animate(draw, duration) {
    var start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // определить, сколько прошло времени с начала анимации
      var timePassed = time - start;
  
      // возможно небольшое превышение времени, в этом случае зафиксировать конец
      if (timePassed > duration) timePassed = duration;
  
      // нарисовать состояние анимации в момент timePassed
      draw(timePassed);
  
      // если время анимации не закончилось - запланировать ещё кадр
      if (timePassed < duration) {
        requestAnimationFrame(animate);
      }
  
    });
  }

export {Enemy};

