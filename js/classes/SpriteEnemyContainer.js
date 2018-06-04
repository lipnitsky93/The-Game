import {armsLeftEnemySrc, weaponsLeftEnemySrc, legsLeftEnemySrc, bodiesEnemySrc, legsRightEnemySrc, headsEnemySrc, armsRightEnemySrc} from '../constants';
import {canvas, ctx, canvas2, ctx2, TO_RADIANS} from '../constants';

class SpriteEnemyContainer {
    constructor(armLeftEnemy, weaponLeftEnemy, legLeftEnemy, legRightEnemy, bodyEnemy, headEnemy, armRightEnemy) {
        this.armLeftEnemy = resources.get(armsLeftEnemySrc[armLeftEnemy]);
        this.weaponLeftEnemy = resources.get(weaponsLeftEnemySrc[weaponLeftEnemy]);
        this.legLeftEnemy = resources.get(legsLeftEnemySrc[legLeftEnemy]);
        this.bodyEnemy = resources.get(bodiesEnemySrc[bodyEnemy]);
        this.legRightEnemy = resources.get(legsRightEnemySrc[legRightEnemy]);
        this.headEnemy = resources.get(headsEnemySrc[headEnemy]);
        this.armRightEnemy = resources.get(armsRightEnemySrc[armRightEnemy]);
    }
}

export {SpriteEnemyContainer};