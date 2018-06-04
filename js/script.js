import {animationHeroAttack} from './animations';
import {animationHeroWalk} from './animations';
import {animationEnemyWalk} from './animations';
import {animationEnemyAttack} from './animations';
import {Hero} from './classes/Hero';
import {Enemy} from './classes/Enemy';
import {SpriteHeroContainer} from './classes/SpriteHeroContainer';
import {SpriteEnemyContainer} from './classes/SpriteEnemyContainer';
import {res} from './resources';
import {headsHeroSrc, bodiesHeroSrs, armsHeroLeftSrc, armsHeroRightSrc, legHeroLeftSrc, legHeroRightSrc, weaponHeroLeftSrc, weaponHeroRightSrc, headsEnemySrc, bodiesEnemySrc, armsLeftEnemySrc, armsRightEnemySrc, legsLeftEnemySrc, legsRightEnemySrc, weaponsLeftEnemySrc} from './constants';


resources.load(headsHeroSrc.concat(bodiesHeroSrs).concat(armsHeroLeftSrc).concat(armsHeroRightSrc).concat(legHeroLeftSrc).concat(legHeroRightSrc).concat(weaponHeroLeftSrc).concat(weaponHeroRightSrc));
resources.load(headsEnemySrc.concat(bodiesEnemySrc).concat(armsLeftEnemySrc).concat(armsRightEnemySrc).concat(legsLeftEnemySrc).concat(legsRightEnemySrc).concat(weaponsLeftEnemySrc));

resources.onReady(
    () => {
        const gnom = new Hero('Fred');
        const view1 = new SpriteHeroContainer(1, 1, 1, 1, 1, 1, 1, 1);
        gnom.setView(view1);
        gnom.setPosition(300, 500);
        gnom.play(animationHeroAttack);
        
        gnom.currentCountFrame = 3;
        gnom.draw();
        gnom.tick();
       
        const gnom2 = new Enemy('Jimmy');
        const view2 = new SpriteEnemyContainer(0, 0, 0, 0, 1, 1, 1);
        
        gnom2.setView(view2);
        gnom2.setPosition(700, 500);
        gnom2.play(animationEnemyAttack);
        gnom2.currentCountFrame = 3;
        gnom2.draw();
        
        gnom2.tick();
    }
);

