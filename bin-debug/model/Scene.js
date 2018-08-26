var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Scene = (function () {
    function Scene() {
        this.enemyPlaneArr = [];
        this.enemyAmmoArr = [];
        this.intervalArr = [];
    }
    Scene.prototype.removeEnemyPlane = function (i) {
        map.removeChild(this.enemyPlaneArr[i].getPlaneBody);
        map.removeChild(this.enemyPlaneArr[i].getHpText());
        this.enemyPlaneArr.splice(i, 1);
        this.removeEnemyAmmoArr(i);
    };
    Scene.prototype.removeEnemyAmmoArr = function (i) {
        map.removeChild(this.enemyAmmoArr[i].getAmmo);
        clearTimeout(this.enemyAmmoArr[i].getAmmoAnimation);
        this.intervalArr.splice(i, 1);
        this.enemyAmmoArr.splice(i, 1);
    };
    return Scene;
}());
__reflect(Scene.prototype, "Scene");
//# sourceMappingURL=Scene.js.map