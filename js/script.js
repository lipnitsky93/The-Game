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


function showButtons() {
    const arrOfButtons = document.body.querySelectorAll('.game-control input');
    _.forEach(arrOfButtons, 
        (item, i) => {
            arrOfButtons[i].style.display = 'inline';
        });
}

function hideButtons() {
    const arrOfButtons = document.body.querySelectorAll('.game-control input');
    _.forEach(arrOfButtons, 
        (item, i) => {
            arrOfButtons[i].style.display = 'none';
        });
}

export {showButtons, hideButtons};



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
            hideButtons();
            const firstName = formOfFirstName.value || 'anonymous';
            const user = new User();
            user.setFirstName(firstName);
            const hero = new Hero(user.firstName);
            const enemy = new Enemy();
            enemy.setName();
            enemy.setView();

            /************************************************** Initial animation **********************************************************/
            enemy.walk(12, 1500, 700);
            enemy.drawInfo();

            hero.setView(new SpriteHeroContainer(2, 2, 2, 2, 2, 2, 2, 2));
            hero.walk(12, -300, 500);
            hero.drawInfo();
            startArea.style.display = 'none';
            gameArea.style.display = 'block';


        /******************************************************* Mathematic task ************************************************************/  
        
        
        const task1 = new MathematicTask();


        function startMathematicTask() {
            hideButtons();
            const taskWrapper = document.body.querySelector('.task');
            taskWrapper.style.display = 'block';
            task1.setValues()
            task1.setIntegerResult();
            console.log(task1);
            
            const condition = document.body.querySelector('.mathematic p:nth-child(2)');
            condition.innerHTML = `${task1.a} ${task1.operator} ${task1.b} =`;
        }

        const inputAnswer = document.body.querySelector('.mathematic input');
        const taskWrapper = document.body.querySelector('.task');
        const answerMessage = document.body.querySelector('.mathematic p:last-child');
        const buttonCheck = document.body.querySelector('.mathematic input.butt-check');

        

        function closeTaskWrapper() {
            taskWrapper.style.display = 'none';
            inputAnswer.value = '';
            answerMessage.innerHTML = '';
        }
 
        function checkValue() { 
            const inputAnswer = document.body.querySelector('.mathematic input');
            console.log(task1);
            console.log(task1.result);
            buttonCheck.style.display = 'none';
            if (+inputAnswer.value === task1.result) {
                console.log('You are awesome!');
                answerMessage.innerHTML = 'Correctly!'
                setTimeout(closeTaskWrapper, 1500);
                setTimeout(hero.attack.bind(hero), 1700);
                setTimeout(hero.drawInfo.bind(hero), 1700);
                setTimeout(enemy.loseHealth.bind(enemy), 3300);
                
                setTimeout(enemy.attack.bind(enemy), 3700);
                setTimeout(enemy.drawInfo.bind(enemy), 3700);
                setTimeout(hero.loseHealth.bind(hero), 5300);
                
                
            } else {
                console.log('Very bad!');
                answerMessage.innerHTML = 'Wrong!'
                setTimeout(closeTaskWrapper, 1500);
                setTimeout(enemy.attack.bind(enemy), 1700);
                setTimeout(enemy.drawInfo.bind(enemy), 1700);
                setTimeout(hero.loseHealth.bind(hero), 3300);
                
            }
            
        }
        buttonCheck.addEventListener('click', checkValue);
    
        const buttonAttack = document.body.querySelector('.attack');   
        buttonAttack.addEventListener('click', startMathematicTask);


        function outputNewMonster() {
            hideButtons();
            const enemy= new Enemy();
            enemy.health = 100;
            enemy.setName();
            enemy.setView();

            
            enemy.walk(12, 1500, 700);
            enemy.drawInfo();
        }



        }

        buttonStart.addEventListener('click', startGame);

        

        

        

      







        





        
    }
);

