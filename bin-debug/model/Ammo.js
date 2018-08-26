var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 子弹类
 */
var Ammo = (function () {
    function Ammo(ammo, initialIndex, speed) {
        this.setAmmo = ammo;
        map.addChild(ammo);
        this.setSpeed = speed || 5;
        this.initialIndex = [initialIndex[0] - this.getAmmo.width / 2, initialIndex[1]];
        this.initAmmoIndex();
    }
    Object.defineProperty(Ammo.prototype, "timeInterval", {
        get: function () {
            return this._timeInterval;
        },
        set: function (_timeInterval) {
            this._timeInterval = _timeInterval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ammo.prototype, "setAmmoAnimation", {
        set: function (ammoAnimation) {
            this.ammoAnimation = ammoAnimation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ammo.prototype, "getAmmoAnimation", {
        get: function () {
            return this.ammoAnimation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ammo.prototype, "getAmmoBody", {
        get: function () {
            return this.ammoBody;
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(Ammo.prototype, "getAmmo", {
        get: function () {
            return this.ammoBody;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ammo.prototype, "getSpeed", {
        get: function () {
            return this.speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ammo.prototype, "setSpeed", {
        set: function (speed) {
            this.speed = speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ammo.prototype, "setAmmo", {
        set: function (ammoBody) {
            this.ammoBody = ammoBody;
        },
        enumerable: true,
        configurable: true
    });
    Ammo.prototype.toString = function () {
        console.log("\"\u901F\u5EA6:\"" + this.speed + "\u4E2D\u5FC3\u5750\u6807\uFF1A" + this.centerX + "," + this.centerY);
    };
    return Ammo;
}());
__reflect(Ammo.prototype, "Ammo");
//# sourceMappingURL=Ammo.js.map