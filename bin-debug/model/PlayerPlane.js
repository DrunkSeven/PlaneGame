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
 * 玩家飞机类
 */
var PlayerPlane = (function (_super) {
    __extends(PlayerPlane, _super);
    function PlayerPlane(body, x, y, HP) {
        if (HP === void 0) { HP = 5; }
        var _this = _super.call(this, body, x, y) || this;
        _this.planeMove();
        _this.hpText = new egret.TextField();
        map.addChild(_this.hpText);
        _this.HP = HP;
        return _this;
    }
    Object.defineProperty(PlayerPlane.prototype, "HP", {
        get: function () {
            return this._HP;
        },
        set: function (HP) {
            this._HP = HP;
            this.hpText.text = "" + HP;
        },
        enumerable: true,
        configurable: true
    });
    PlayerPlane.prototype.planeMove = function () {
        var _this = this;
        map.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            _this.setPlaneIndex(e.stageX, e.stageY);
        }, this);
    };
    return PlayerPlane;
}(Plane));
__reflect(PlayerPlane.prototype, "PlayerPlane");
//# sourceMappingURL=PlayerPlane.js.map