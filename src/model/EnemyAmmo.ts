/**
 * 敌方子弹
 */
class EnemyAmmo extends Ammo {
    constructor(ammo: egret.Bitmap, map: eui.UILayer, initialIndex: Array<number>, speed?: number) {
        super(ammo, map, initialIndex, speed);
    }
}