const canvas = document.getElementById("myCanvasHero");
const ctx = canvas.getContext("2d");
const canvas2 = document.getElementById("myCanvasEnemy");
const ctx2 = canvas2.getContext("2d");
const TO_RADIANS = Math.PI/180; 
const headsHeroSrc = ['testimages/hero/head/knight_head_1.png', 'testimages/hero/head/knight_head_2.png', 'testimages/hero/head/knight_head_3.png', 'testimages/hero/head/1_head.png'];
const bodiesHeroSrs = ['testimages/hero/body/knight_chest_1.png', 'testimages/hero/body/knight_chest_2.png', 'testimages/hero/body/knight_chest_3.png'];
const armsHeroLeftSrc = ['testimages/hero/armleft/knight_arm_left_1.png', 'testimages/hero/armleft/knight_arm_left_2.png', 'testimages/hero/armleft/knight_arm_left_3.png'];
const armsHeroRightSrc = ['testimages/hero/armright/knight_arm_right_1.png', 'testimages/hero/armright/knight_arm_right_2.png', 'testimages/hero/armright/knight_arm_right_3.png'];
const legHeroLeftSrc = ['testimages/hero/legleft/knight_leg_left_1.png', 'testimages/hero/legleft/knight_leg_left_2.png', 'testimages/hero/legleft/knight_leg_left_3.png'];
const legHeroRightSrc = ['testimages/hero/legright/knight_leg_right_1.png', 'testimages/hero/legright/knight_leg_right_2.png', 'testimages/hero/legright/knight_leg_right_3.png'];
const weaponHeroLeftSrc = ['testimages/hero/weaponleft/knight_weapon_left_1.png', 'testimages/hero/weaponleft/knight_weapon_left_2.png', 'testimages/hero/weaponleft/knight_weapon_left_3.png'];
const weaponHeroRightSrc = ['testimages/hero/weaponright/knight_weapon_right_1.png', 'testimages/hero/weaponright/knight_weapon_right_2.png', 'testimages/hero/weaponright/knight_weapon_right_3.png'];

const headsEnemySrc = ['testimages/enemy/head/orc_head_1.png', 'testimages/enemy/head/orc_head_2.png', 'testimages/enemy/head/orc_head_3.png'];
const bodiesEnemySrc = ['testimages/enemy/body/orc_chest_1.png', 'testimages/enemy/body/orc_chest_2.png', 'testimages/enemy/body/orc_chest_3.png'];
const armsLeftEnemySrc = ['testimages/enemy/armleft/orc_arm_left_1.png', 'testimages/enemy/armleft/orc_arm_left_2.png', 'testimages/enemy/armleft/orc_arm_left_3.png'];
const armsRightEnemySrc = ['testimages/enemy/armright/orc_arm_right_1.png', 'testimages/enemy/armright/orc_arm_right_2.png', 'testimages/enemy/armright/orc_arm_right_3.png'];
const legsLeftEnemySrc = ['testimages/enemy/legleft/orc_leg_left_1.png', 'testimages/enemy/legleft/orc_leg_left_2.png', 'testimages/enemy/legleft/orc_leg_left_3.png'];
const legsRightEnemySrc = ['testimages/enemy/legright/orc_leg_right_1.png', 'testimages/enemy/legright/orc_leg_right_2.png', 'testimages/enemy/legright/orc_leg_right_3.png'];
const weaponsLeftEnemySrc = ['testimages/enemy/weaponleft/orc_weapon_left_1.png', 'testimages/enemy/weaponleft/orc_weapon_left_2.png', 'testimages/enemy/weaponleft/orc_weapon_left_3.png'];


export {canvas, ctx, canvas2, ctx2, TO_RADIANS};
export {headsHeroSrc, bodiesHeroSrs, armsHeroLeftSrc, armsHeroRightSrc, legHeroLeftSrc, legHeroRightSrc, weaponHeroLeftSrc, weaponHeroRightSrc, headsEnemySrc, bodiesEnemySrc, armsLeftEnemySrc, armsRightEnemySrc, legsLeftEnemySrc, legsRightEnemySrc, weaponsLeftEnemySrc};


