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
var About = (function (_super) {
    __extends(About, _super);
    function About() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.onUIComp, _this);
        _this.skinName = "resource/eui_skins/About.exml";
        return _this;
    }
    About.prototype.onUIComp = function () {
        this.aboutText.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnClick, this);
        // this.btns=this.aboutText;
    };
    About.prototype.onBtnClick = function () {
        console.log("click");
    };
    return About;
}(eui.Component));
__reflect(About.prototype, "About");
//# sourceMappingURL=About.js.map