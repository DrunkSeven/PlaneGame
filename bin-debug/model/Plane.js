var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Plane = (function () {
    function Plane(body, map, x, y, HP) {
        this.body = body;
        this.map = map;
        this.HP = 10; //血量
        this.AmmoIndex = [0, 0]; //初始子弹位置
        this.setPlaneBody = body;
        this.setPlaneIndex(x, y);
        map.addChild(body);
    }
    Plane.prototype.setPlaneIndex = function (x, y) {
        this.planeBody.x = x - this.planeBody.width / 2;
        this.planeBody.y = y - this.planeBody.height / 2;
        this.centerX = x;
        this.centerY = y;
    };
    Object.defineProperty(Plane.prototype, "getPlaneBody", {
        get: function () {
            return this.planeBody;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plane.prototype, "setPlaneBody", {
        set: function (planeBody) {
            this.planeBody = planeBody;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plane.prototype, "getHP", {
        get: function () {
            return this.HP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plane.prototype, "setHP", {
        set: function (HP) {
            this.HP = HP;
        },
        enumerable: true,
        configurable: true
    });
    return Plane;
}());
__reflect(Plane.prototype, "Plane");
//# sourceMappingURL=Plane.js.map