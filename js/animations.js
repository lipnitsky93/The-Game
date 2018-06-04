import {Part} from './classes/Part';
import {Frame} from './classes/Frame';
import {AnimationInfo} from './classes/AnimationInfo';

// *************************************** Create Hero attack animation *********************************************************************

const frameHeroAttack1 = new Frame();

frameHeroAttack1.parts.push(new Part('armHeroLeft', 35, 70, 0));
frameHeroAttack1.parts.push(new Part('bodyHero', 35, 70, 0));
frameHeroAttack1.parts.push(new Part('headHero', 75, 40, 0));
frameHeroAttack1.parts.push(new Part('armHeroRight', 35, 70, 0));



const frameHeroAttack2 = new Frame();

frameHeroAttack2.parts.push(new Part('bodyHero', 40, 70, 0));
frameHeroAttack2.parts.push(new Part('headHero', 85, 40, 0));


const frameHeroAttack3 = new Frame();

frameHeroAttack3.parts.push(new Part('bodyHero', 40, 70, 0));
frameHeroAttack3.parts.push(new Part('headHero', 95, 40, 0));


const animationHeroAttack = new AnimationInfo('attack');

animationHeroAttack.frames.push(frameHeroAttack1);
animationHeroAttack.frames.push(frameHeroAttack2);
animationHeroAttack.frames.push(frameHeroAttack3);

export {animationHeroAttack};
// ***************************************** Create Hero walk animation *********************************************************************

const frameHeroWalk1 = new Frame();

frameHeroWalk1.parts.push(new Part('armHeroLeft', 203, 137, 0));
frameHeroWalk1.parts.push(new Part('weaponHeroLeft', 212, 88, 0));
frameHeroWalk1.parts.push(new Part('legHeroLeft', 190, 195, 0));
frameHeroWalk1.parts.push(new Part('bodyHero', 105, 115, 0));
frameHeroWalk1.parts.push(new Part('legHeroRight', 160, 195, 0));
frameHeroWalk1.parts.push(new Part('headHero', 115, 40, 0));
frameHeroWalk1.parts.push(new Part('armHeroRight', 125, 137, 0));
frameHeroWalk1.parts.push(new Part('weaponHeroRight', 140, 150, 0));


const frameHeroWalk2 = new Frame();

frameHeroWalk2.parts.push(new Part('armHeroLeft', 220, 127, -60));
frameHeroWalk2.parts.push(new Part('weaponHeroLeft', 188, 35, -60));
frameHeroWalk2.parts.push(new Part('legHeroLeft', 190, 195, 0));
frameHeroWalk2.parts.push(new Part('bodyHero', 105, 110, 0));
frameHeroWalk2.parts.push(new Part('legHeroRight', 170, 200, -25));
frameHeroWalk2.parts.push(new Part('headHero', 115, 40, -5));
frameHeroWalk2.parts.push(new Part('armHeroRight', 115, 137, 20));
frameHeroWalk2.parts.push(new Part('weaponHeroRight', 115, 150, 10));


const frameHeroWalk3 = new Frame();

frameHeroWalk3.parts.push(new Part('armHeroLeft', 203, 137, 0));
frameHeroWalk3.parts.push(new Part('weaponHeroLeft', 212, 88, 0));
frameHeroWalk3.parts.push(new Part('legHeroLeft', 190, 195, 0));
frameHeroWalk3.parts.push(new Part('bodyHero', 105, 115, 0));
frameHeroWalk3.parts.push(new Part('legHeroRight', 160, 195, 0));
frameHeroWalk3.parts.push(new Part('headHero', 115, 40, 0));
frameHeroWalk3.parts.push(new Part('armHeroRight', 125, 137, 0));
frameHeroWalk3.parts.push(new Part('weaponHeroRight', 140, 150, 0));

const frameHeroWalk4 = new Frame();

frameHeroWalk4.parts.push(new Part('armHeroLeft', 195, 137, 20));
frameHeroWalk4.parts.push(new Part('weaponHeroLeft', 200,105, 20));
frameHeroWalk4.parts.push(new Part('legHeroLeft', 195, 188, -25));
frameHeroWalk4.parts.push(new Part('bodyHero', 105, 110, 0));
frameHeroWalk4.parts.push(new Part('legHeroRight', 160, 195, 0));
frameHeroWalk4.parts.push(new Part('headHero', 115, 40, -5));
frameHeroWalk4.parts.push(new Part('armHeroRight', 145, 135, -60));
frameHeroWalk4.parts.push(new Part('weaponHeroRight', 160, 140, -5));


const animationHeroWalk = new AnimationInfo('walk');

animationHeroWalk.frames.push(frameHeroWalk1);
animationHeroWalk.frames.push(frameHeroWalk2);
animationHeroWalk.frames.push(frameHeroWalk3);
animationHeroWalk.frames.push(frameHeroWalk4);


export {animationHeroWalk};
// ****************************************** Create Enemy walk animation ************************************************************

const frameEnemyWalk1 = new Frame();

frameEnemyWalk1.parts.push(new Part('armLeftEnemy', 118, 95, 0));
frameEnemyWalk1.parts.push(new Part('weaponLeftEnemy', 25, 120, 0));
frameEnemyWalk1.parts.push(new Part('legLeftEnemy', 160, 187, 0));
frameEnemyWalk1.parts.push(new Part('legRightEnemy', 193, 187, 0));
frameEnemyWalk1.parts.push(new Part('bodyEnemy', 135, 62, 0));
frameEnemyWalk1.parts.push(new Part('headEnemy', 110, 10, 0));
frameEnemyWalk1.parts.push(new Part('armRightEnemy', 225, 87, 0));



const frameEnemyWalk2 = new Frame();

frameEnemyWalk2.parts.push(new Part('armLeftEnemy', 105, 85, -30));
frameEnemyWalk2.parts.push(new Part('weaponLeftEnemy', 12, 80, -30));
frameEnemyWalk2.parts.push(new Part('legLeftEnemy', 160, 187, 0));
frameEnemyWalk2.parts.push(new Part('legRightEnemy', 185, 187, -25));
frameEnemyWalk2.parts.push(new Part('bodyEnemy', 135, 60, 0));
frameEnemyWalk2.parts.push(new Part('headEnemy', 105, 10, 0));
frameEnemyWalk2.parts.push(new Part('armRightEnemy', 240, 80, 20));


const frameEnemyWalk3 = new Frame();

frameEnemyWalk3.parts.push(new Part('armLeftEnemy', 118, 95, 0));
frameEnemyWalk3.parts.push(new Part('weaponLeftEnemy', 25, 120, 0));
frameEnemyWalk3.parts.push(new Part('legLeftEnemy', 160, 187, 0));
frameEnemyWalk3.parts.push(new Part('legRightEnemy', 193, 187, 0));
frameEnemyWalk3.parts.push(new Part('bodyEnemy', 135, 62, 0));
frameEnemyWalk3.parts.push(new Part('headEnemy', 110, 10, 0));
frameEnemyWalk3.parts.push(new Part('armRightEnemy', 225, 87, 0));

const frameEnemyWalk4 = new Frame();

frameEnemyWalk4.parts.push(new Part('armLeftEnemy', 115, 95, 10));
frameEnemyWalk4.parts.push(new Part('weaponLeftEnemy', 27, 128, 10));
frameEnemyWalk4.parts.push(new Part('legLeftEnemy', 155, 187, -25));
frameEnemyWalk4.parts.push(new Part('legRightEnemy', 193, 187, 0));
frameEnemyWalk4.parts.push(new Part('bodyEnemy', 135, 60, 0));
frameEnemyWalk4.parts.push(new Part('headEnemy', 105, 10, 0));
frameEnemyWalk4.parts.push(new Part('armRightEnemy', 208, 87, -30));


const animationEnemyWalk = new AnimationInfo('walk');

animationEnemyWalk.frames.push(frameEnemyWalk1);
animationEnemyWalk.frames.push(frameEnemyWalk2);
animationEnemyWalk.frames.push(frameEnemyWalk3);
animationEnemyWalk.frames.push(frameEnemyWalk4);

export {animationEnemyWalk};