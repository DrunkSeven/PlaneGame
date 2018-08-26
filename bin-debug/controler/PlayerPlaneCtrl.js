var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PlayerPlaneCtrl = (function () {
    function PlayerPlaneCtrl() {
        this._playerPlane = new PlayerPlane('aircraft_png', map.width / 2, map.height - 100, 10);
        this.ammoCtrl = new AmmoCtrl(this._playerPlane, 'aircraftBullet_png', { y: -40 });
    }
    Object.defineProperty(PlayerPlaneCtrl.prototype, "playerPlane", {
        get: function () {
            return this._playerPlane;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerPlaneCtrl.prototype, "ammoArr", {
        get: function () {
            return this.ammoCtrl.ammoArr;
        },
        enumerable: true,
        configurable: true
    });
    return PlayerPlaneCtrl;
}());
__reflect(PlayerPlaneCtrl.prototype, "PlayerPlaneCtrl");
//# sourceMappingURL=PlayerPlaneCtrl.js.map