var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AmmoCtrl = (function () {
    /**
     * option设置;
     * x:子弹相对于初始坐标x;
     * y:子弹相对于初始坐标y;
     * direction:子弹方向;
     * count:子弹数量;
     * speed:子弹速度;
     * timeInterval:子弹发射时间间隔;
     */
    function AmmoCtrl(plane, ammoImg, option) {
        if (option === void 0) { option = {}; }
        var _this = this;
        this.ammoArr = [];
        this.intervalArr = [];
        this.option = {
            x: 0,
            y: 0,
            direction: 5,
            count: 0,
            speed: 10,
            timeInterval: 500
        };
        GameUtil.setOption(this.option, option);
        var interval = setInterval(function () {
            var ammo = new Ammo(GameUtil.createBitmapByName(ammoImg), [plane.centerX + _this.option.x, plane.getPlaneBody.y + _this.option.y], _this.option.speed);
            _this.ammoArr.push(ammo);
            _this.startAmmoAnimation(ammo, _this.option.direction);
            if (_this.option.count && _this.ammoArr.length == _this.option.count) {
                clearInterval(interval);
            }
        }, this.option.timeInterval);
    }
    //子弹动画
    AmmoCtrl.prototype.startAmmoAnimation = function (ammo, direction, isPlayer) {
        var ammoAnimation = setInterval(function () {
            ammo.setAmmoAnimation = ammoAnimation;
            ammo.setAmmoIndex(ammo.getAmmo.x, ammo.getAmmo.y - direction);
            // let hit = this.hitTest(ammo, isPlayer);
            if (ammo.getAmmo.y < -5) {
                clearTimeout(ammoAnimation);
                map.removeChild(ammo.getAmmoBody);
                // isPlayer ? ammo.setAmmoIndex(this.plane.centerX - ammo.getAmmo.width / 2, this.plane.getPlaneBody.y - 40) : ammo.initAmmoIndex();
                // this.startAmmoAnimation(ammo, isPlayer);
                // if (this.gameEnd()) {
                //     return;
                // }
            }
        }, ammo.getSpeed);
        this.intervalArr.push(ammoAnimation);
    };
    return AmmoCtrl;
}());
__reflect(AmmoCtrl.prototype, "AmmoCtrl");
//# sourceMappingURL=AmmoCtrl.js.map