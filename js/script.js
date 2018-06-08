import {animationHeroAttack} from './animations';
import {animationHeroWalk} from './animations';
import {animationEnemyWalk} from './animations';
import {animationEnemyAttack} from './animations';
import {Hero} from './classes/Hero';
import {User} from './classes/User';
import {Enemy} from './classes/Enemy';
import {MathematicTask} from './classes/MathematicTask';
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

        
       

        function startGame() {
            const firstName = formOfFirstName.value || 'anonymous';
            const user = new User();
            user.setFirstName(firstName);
            const hero = new Hero(user.firstName);
            const enemy = new Enemy();
            enemy.setName();
            enemy.setView();

            /************************************************** Initial animation **********************************************************/
            enemy.walk(12, 1500, 730);
            enemy.drawInfo();

            hero.setView(new SpriteHeroContainer(2, 2, 2, 2, 2, 2, 2, 2));
            hero.walk(12, -300, 470);
            hero.drawInfo();
            startArea.style.display = 'none';
            gameArea.style.display = 'block';
        }

        buttonStart.addEventListener('click', startGame);

        /*********************************************************** Task ******************************************************************/

        function setButtonVisibility() {
            const arrOfButtons = document.body.querySelectorAll('.game-control input');
            _.forEach(arrOfButtons, 
                (item, i) => {
                    arrOfButtons[i].style.opacity = '1';
                });
        }

        const task1 = new MathematicTask();
        console.log(task1);





        
    }
);

