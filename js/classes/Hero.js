import {animationHeroWalk} from '../animations';
import {animationHeroAttack} from '../animations';
import {canvas, ctx, canvas2, ctx2, TO_RADIANS} from '../constants';


class Hero {
    constructor(name) {
        this.name = name;
        this.view;
        this.health = 100;
        this.currentCountFrame = 0;
        this.animation = animationHeroWalk;
        this.context = ctx;
        this.tick_count = 0;
    }

    setView(view) {
        this.view = view;
    }

    play(animation) {
        this.currentCountFrame = 0;
        this.animation = animation;
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
                
                this.context.rotate(item.rotation * TO_RADIANS);
                
                this.context.drawImage(currView, -currView.width / 10, -currView.height / 10, currView.width / 5, currView.height / 5);
                this.context.restore();
            }
        )
        this.currentCountFrame ++;  
    }

    walk(n, start, end) {
        if (this.tick_count > n) {
            this.setPosition(start, 500);
            this.draw();
            if (start < end) {
            start += 30;
            } 
            this.tick_count = 0;
            if (start < end) {
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


    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
}

export {Hero};