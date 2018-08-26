class EnemyPlaneCtrl {
    plane: EnemyPlane;
    ammoCtrl: AmmoCtrl;
    private enemyPlaneArr: Array<EnemyPlane> = [];
    constructor(count: number = 5) {
        for (let i = 0; i < count; i++) {
            this.plane = new EnemyPlane(this.enemyPlaneArr.length, GameUtil.createBitmapByName('aircraft_small_png'), GameUtil.setRandom(map.width - 40, 40), GameUtil.setRandom(180, 80), 1);
            this.ammoCtrl = new AmmoCtrl(this.plane, 'enemyBullet_png', { direction: -5, count: 3, y:40 });
            this.enemyPlaneArr.push(this.plane);
        }
    }
}