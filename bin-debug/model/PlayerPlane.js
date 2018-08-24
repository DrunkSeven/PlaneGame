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
    function PlayerPlane(body, map, x, y, HP) {
        var _this = _super.call(this, body, map, x, y, HP) || this;
        _this.planeMove(map);
        _this.hpText = new egret.TextField();
        _this.map.addChild(_this.hpText);
        _this.setHP(5);
        return _this;
    }
    PlayerPlane.prototype.setHP = function (HP) {
        this.HP = HP;
        this.hpText.text = "" + HP;
    };
    PlayerPlane.prototype.planeMove = function (map) {
        var _this = this;
        map.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            _this.setPlaneIndex(e.stageX, e.stageY);
        }, this);
    };
    return PlayerPlane;
}(Plane));
__reflect(PlayerPlane.prototype, "PlayerPlane");
//# sourceMappingURL=PlayerPlane.js.map