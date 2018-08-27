var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Scene = (function () {
    function Scene() {
        this.enemyPlaneArr = [];
        this.intervalArr = [];
    }
    return Scene;
}());
__reflect(Scene.prototype, "Scene");
//# sourceMappingURL=Scene.js.map