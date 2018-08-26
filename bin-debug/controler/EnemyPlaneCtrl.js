var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EnemyPlaneCtrl = (function () {
    function EnemyPlaneCtrl(count) {
        if (count === void 0) { count = 5; }
        this._enemyPlaneArr = [];
        for (var i = 0; i < count; i++) {
            var plane = new EnemyPlane(this._enemyPlaneArr.length, 'aircraft_small_png', GameUtil.setRandom(map.width - 40, 40), GameUtil.setRandom(180, 80), 1);
            this.ammoCtrl = new AmmoCtrl(plane, 'enemyBullet_png', { direction: -5, count: 3, y: 40 });
            plane.getPlaneBody.addEventListener(eui.UIEvent.REMOVED, this.onRemove, { plane: plane, enemyPlaneArr: this._enemyPlaneArr });
            this._enemyPlaneArr.push(plane);
        }
    }
    EnemyPlaneCtrl.prototype.onRemove = function () {
        var _this = this;
        this.enemyPlaneArr.splice(this.enemyPlaneArr.findIndex(function (item) {
            return item.ID == _this.plane.ID;
        }), 1);
    };
    Object.defineProperty(EnemyPlaneCtrl.prototype, "enemyPlaneArr", {
        get: function () {
            return this._enemyPlaneArr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnemyPlaneCtrl.prototype, "ammoArr", {
        get: function () {
            return this.ammoCtrl.ammoArr;
        },
        enumerable: true,
        configurable: true
    });
    return EnemyPlaneCtrl;
}());
__reflect(EnemyPlaneCtrl.prototype, "EnemyPlaneCtrl");
//# sourceMappingURL=EnemyPlaneCtrl.js.map