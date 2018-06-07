import {animationHeroAttack} from './animations';
import {animationHeroWalk} from './animations';
import {animationEnemyWalk} from './animations';
import {animationEnemyAttack} from './animations';
import {Hero} from './classes/Hero';
import {User} from './classes/User';
import {Enemy} from './classes/Enemy';
import {SpriteHeroContainer} from './classes/SpriteHeroContainer';
import {SpriteEnemyContainer} from './classes/SpriteEnemyContainer';
import {res} from './resources';
import {headsHeroSrc, bodiesHeroSrs, armsHeroLeftSrc, armsHeroRightSrc, legHeroLeftSrc, legHeroRightSrc, weaponHeroLeftSrc, weaponHeroRightSrc, headsEnemySrc, bodiesEnemySrc, armsLeftEnemySrc, armsRightEnemySrc, legsLeftEnemySrc, legsRightEnemySrc, weaponsLeftEnemySrc} from './constants';


resources.load(headsHeroSrc.concat(bodiesHeroSrs).concat(armsHeroLeftSrc).concat(armsHeroRightSrc).concat(legHeroLeftSrc).concat(legHeroRightSrc).concat(weaponHeroLeftSrc).concat(weaponHeroRightSrc));
resources.load(headsEnemySrc.concat(bodiesEnemySrc).concat(armsLeftEnemySrc).concat(armsRightEnemySrc).concat(legsLeftEnemySrc).concat(legsRightEnemySrc).concat(weaponsLeftEnemySrc));

resources.onReady(
    () => {

        const startArea = document.body.querySelector('.start-area');
        const gameArea = document.body.querySelector('.game-area');
        const buttonStart = document.body.querySelector('.butt-start');
        const formOfFirstName = document.forms.userData.firstName;
        
        console.log(formOfFirstName.value);

        function introAnimation() {
            const hero = new Hero(user.firstName);
        }
       

        function startGame() {
            const firstName = formOfFirstName.value || null;
            const user = new User();
            user.setFirstName(firstName);
            const hero = new Hero(user.firstName);
            const enemy = new Enemy();
            enemy.setName();
            enemy.setView();
            //enemy.setPosition(800, 500);
            enemy.walk(10, 1500, 730);


            hero.setView(new SpriteHeroContainer(2, 2, 2, 2, 2, 2, 2, 2));
            hero.walk(10, -300, 470);
            
            console.log(enemy);
            startArea.style.display = 'none';
            gameArea.style.display = 'block';
            
            
            
            
            console.log(user);
        }

        buttonStart.addEventListener('click', startGame);






        /*
        const gnom = new Hero('Fred');
        const view1 = new SpriteHeroContainer(0, 0, 0, 0, 0, 0, 0, 0);
        gnom.setView(view1);
        gnom.setPosition(430, 500);
        gnom.play(animationHeroAttack);
        
        gnom.currentCountFrame = 3;
        gnom.draw();
        gnom.tick();
       
        const gnom2 = new Enemy('Jimmy');
        const view2 = new SpriteEnemyContainer(2, 2, 2, 2, 2, 2, 2);
        
        gnom2.setView(view2);
        gnom2.setPosition(700, 500);
        gnom2.play(animationEnemyAttack);
        gnom2.currentCountFrame = 0;
        gnom2.draw();
        
        //gnom2.tick();
        */
    }
);

