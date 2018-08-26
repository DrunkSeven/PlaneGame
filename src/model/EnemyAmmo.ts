/**
 * 敌方子弹
 */
class EnemyAmmo extends Ammo {
    constructor(ammo: egret.Bitmap, initialIndex: Array<number>, speed?: number) {
        super(ammo, initialIndex, speed);
    }
}