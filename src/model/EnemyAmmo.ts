/**
 * 敌方子弹
 */
class EnemyAmmo extends Ammo {
    constructor(ammo: string, initialIndex: Array<number>, speed?: number) {
        super(ammo, initialIndex, speed);
    }
}