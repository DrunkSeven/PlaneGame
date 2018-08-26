var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PlayerPlaneCtrl = (function () {
    function PlayerPlaneCtrl() {
        this.plane = new PlayerPlane(GameUtil.createBitmapByName('aircraft_png'), map.width / 2, map.height - 100, 10);
        this.ammoCtrl = new AmmoCtrl(this.plane, 'aircraftBullet_png', { y: -40 });
    }
    return PlayerPlaneCtrl;
}());
__reflect(PlayerPlaneCtrl.prototype, "PlayerPlaneCtrl");
//# sourceMappingURL=PlayerPlaneCtrl.js.map