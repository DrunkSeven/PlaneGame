class EnemyPlaneCtrl {
    private ammoCtrl: AmmoCtrl;
    private _enemyPlaneArr: Array<EnemyPlane> = [];
    constructor(count: number = 5) {
        for (let i = 0; i < count; i++) {
            let plane: EnemyPlane = new EnemyPlane(this._enemyPlaneArr.length, 'aircraft_small_png', GameUtil.setRandom(map.width - 40, 40), GameUtil.setRandom(180, 80), 1);
            this.ammoCtrl = new AmmoCtrl(plane, 'enemyBullet_png', { direction: -5, count: 3, y: 40 });
            plane.getPlaneBody.addEventListener(eui.UIEvent.REMOVED, this.onRemove, { plane: plane, enemyPlaneArr: this._enemyPlaneArr })
            this._enemyPlaneArr.push(plane);
        }
    }
    onRemove(this: any) {
        this.enemyPlaneArr.splice(this.enemyPlaneArr.findIndex(item => {
            return item.ID == this.plane.ID;
        }), 1);
    }
    get enemyPlaneArr(): Array<EnemyPlane> {
        return this._enemyPlaneArr;
    }
    get ammoArr(): Array<Ammo> {
        return this.ammoCtrl.ammoArr;
    }
}