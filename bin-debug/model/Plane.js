var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Plane = (function () {
    function Plane(body, x, y, ID) {
        if (ID === void 0) { ID = "PLAYER"; }
        this.body = body;
        this._HP = 10; //血量
        this.AmmoIndex = [0, 0]; //初始子弹位置
        this.setPlaneBody = GameUtil.createBitmapByName(body);
        this.setPlaneIndex(x, y);
        this._ID = ID;
        map.addChild(this.planeBody);
    }
    Plane.prototype.setPlaneIndex = function (x, y) {
        this.planeBody.x = x - this.planeBody.width / 2;
        this.planeBody.y = y - this.planeBody.height / 2;
        this.centerX = x;
        this.centerY = y;
    };
    Object.defineProperty(Plane.prototype, "ID", {
        get: function () {
            return this._ID;
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(Plane.prototype, "HP", {
        get: function () {
            console.log(this._HP);
            return this._HP;
        },
        enumerable: true,
        configurable: true
    });
    return Plane;
}());
__reflect(Plane.prototype, "Plane");
//# sourceMappingURL=Plane.js.map