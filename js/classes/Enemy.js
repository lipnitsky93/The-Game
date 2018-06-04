import {Hero} from './Hero';
import {animationEnemyWalk} from '../animations';
import {canvas, ctx, canvas2, ctx2, TO_RADIANS} from '../constants';

class Enemy extends Hero {
    constructor() {
        super();
        this.context = ctx2;
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
}

export {Enemy};

