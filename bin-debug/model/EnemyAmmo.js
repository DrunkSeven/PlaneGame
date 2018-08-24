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
 * 敌方子弹
 */
var EnemyAmmo = (function (_super) {
    __extends(EnemyAmmo, _super);
    function EnemyAmmo(ammo, map, initialIndex, speed) {
        return _super.call(this, ammo, map, initialIndex, speed) || this;
    }
    return EnemyAmmo;
}(Ammo));
__reflect(EnemyAmmo.prototype, "EnemyAmmo");
//# sourceMappingURL=EnemyAmmo.js.map