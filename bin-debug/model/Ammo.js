var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 子弹类
 */
var Ammo = (function () {
    function Ammo(ammo, map, initialIndex, speed) {
        this.map = map;
        this.setAmmo(ammo);
        map.addChild(ammo);
        this.setSpeed(speed || 5);
        this.initialIndex = [initialIndex[0] - this.getAmmo().width / 2, initialIndex[1]];
        this.initAmmoIndex();
    }
    Ammo.prototype.setAmmoAnimation = function (ammoAnimation) {
        this.ammoAnimation = ammoAnimation;
    };
    Ammo.prototype.getAmmoAnimation = function () {
        return this.ammoAnimation;
    };
    Ammo.prototype.getAmmoBody = function () {
        return this.ammoBody;
    };
    Ammo.prototype.initAmmoIndex = function () {
        this.ammoBody.x = this.initialIndex[0];
        this.ammoBody.y = this.initialIndex[1];
    };
    Ammo.prototype.setAmmoIndex = function (x, y) {
        this.ammoBody.x = x;
        this.ammoBody.y = y;
        this.centerX = x + this.ammoBody.width / 2;
        this.centerY = y + this.ammoBody.width / 2;
    };
    Ammo.prototype.getAmmo = function () {
        return this.ammoBody;
    };
    Ammo.prototype.getSpeed = function () {
        return this.speed;
    };
    Ammo.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Ammo.prototype.setAmmo = function (ammoBody) {
        this.ammoBody = ammoBody;
    };
    Ammo.prototype.toString = function () {
        console.log("\"\u901F\u5EA6:\"" + this.speed + "\u4E2D\u5FC3\u5750\u6807\uFF1A" + this.centerX + "," + this.centerY);
    };
    return Ammo;
}());
__reflect(Ammo.prototype, "Ammo");
//# sourceMappingURL=Ammo.js.map