var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Scene = (function () {
    function Scene(map) {
        this.enemyPlaneArr = [];
        this.enemyAmmoArr = [];
        this.intervalArr = [];
        this.map = map;
    }
    Scene.prototype.removeEnemyPlane = function (i) {
        this.map.removeChild(this.enemyPlaneArr[i].getPlaneBody());
        this.map.removeChild(this.enemyPlaneArr[i].getHpText());
        this.enemyPlaneArr.splice(i, 1);
        this.removeEnemyAmmoArr(i);
    };
    Scene.prototype.removeEnemyAmmoArr = function (i) {
        this.map.removeChild(this.enemyAmmoArr[i].getAmmoBody());
        clearTimeout(this.enemyAmmoArr[i].getAmmoAnimation());
        this.intervalArr.splice(i, 1);
        this.enemyAmmoArr.splice(i, 1);
    };
    return Scene;
}());
__reflect(Scene.prototype, "Scene");
//# sourceMappingURL=Scene.js.map