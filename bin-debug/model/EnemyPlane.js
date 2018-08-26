var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 敌方飞机类
 */
var EnemyPlane = (function (_super) {
    __extends(EnemyPlane, _super);
    function EnemyPlane(ID, body, x, y, HP) {
        var _this = _super.call(this, body, x, y) || this;
        _this.ID = ID;
        _this.hpText = new egret.TextField();
        _this.hpText.x = _this.planeBody.x + 10;
        _this.hpText.y = _this.planeBody.y - 40;
        map.addChild(_this.hpText);
        _this.setHP = HP;
        return _this;
    }
    EnemyPlane.prototype.getHpText = function () {
        return this.hpText;
    };
    Object.defineProperty(EnemyPlane.prototype, "getID", {
        get: function () {
            return this.ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnemyPlane.prototype, "setHP", {
        set: function (HP) {
            this.HP = HP;
            this.hpText.text = HP + " " + this.ID + "\u53F7\u654C\u673A";
        },
        enumerable: true,
        configurable: true
    });
    return EnemyPlane;
}(Plane));
__reflect(EnemyPlane.prototype, "EnemyPlane");
//# sourceMappingURL=EnemyPlane.js.map