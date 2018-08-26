var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EnemyPlaneCtrl = (function () {
    function EnemyPlaneCtrl(count) {
        if (count === void 0) { count = 5; }
        this.enemyPlaneArr = [];
        for (var i = 0; i < count; i++) {
            this.plane = new EnemyPlane(this.enemyPlaneArr.length, GameUtil.createBitmapByName('aircraft_small_png'), GameUtil.setRandom(map.width - 40, 40), GameUtil.setRandom(180, 80), 1);
            this.ammoCtrl = new AmmoCtrl(this.plane, 'enemyBullet_png', { direction: -5, count: 3, y: 40 });
            this.enemyPlaneArr.push(this.plane);
        }
    }
    return EnemyPlaneCtrl;
}());
__reflect(EnemyPlaneCtrl.prototype, "EnemyPlaneCtrl");
//# sourceMappingURL=EnemyPlaneCtrl.js.map