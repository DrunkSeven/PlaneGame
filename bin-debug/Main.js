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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
; //伤害描述
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame();
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, platform.login()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 3:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    Main.prototype.createGameScene = function () {
        var sky = this.createBitmapByName("bg_jpg");
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        this.addChild(sky);
        this.scene = new Scene(this);
        this.textfield = new egret.TextField();
        this.textfield.x = 100;
        this.textfield.y = 300;
        this.addChild(this.textfield);
        this.plane = new PlayerPlane(this.createBitmapByName('aircraft_png'), this, this.width / 2, this.height - 100, 10);
        var ammo = new Ammo(this.createBitmapByName('aircraftBullet_png'), this, [this.plane.centerX, this.plane.getPlaneBody().y - 40], 5);
        this.addEnemyPlane(6);
        this.startAmmoAnimation(ammo, true);
    };
    //设置敌机 num 敌机数量
    Main.prototype.addEnemyPlane = function (num) {
        if (num === void 0) { num = 10; }
        for (var i = 0; i < num; i++) {
            var enemyPlane = new EnemyPlane(this.scene.enemyPlaneArr.length, this.createBitmapByName('aircraft_small_png'), this, GameUtil.setRandom(this.width - 40, 40), GameUtil.setRandom(180, 80), 1);
            var enemyAmmo = new EnemyAmmo(this.createBitmapByName('enemyBullet_png'), this, [enemyPlane.centerX, enemyPlane.getPlaneBody().y + 40], -5);
            this.startAmmoAnimation(enemyAmmo, false);
            this.scene.enemyPlaneArr.push(enemyPlane);
            this.scene.enemyAmmoArr.push(enemyAmmo);
        }
    };
    //子弹动画
    Main.prototype.startAmmoAnimation = function (ammo, isPlayer) {
        var _this = this;
        var ammoAnimation = setInterval(function () {
            ammo.setAmmoAnimation(ammoAnimation);
            ammo.setAmmoIndex(ammo.getAmmo().x, ammo.getAmmo().y - ammo.getSpeed());
            var hit = _this.hitTest(ammo, isPlayer);
            if (ammo.getAmmo().y < 0 || ammo.getAmmo().y > _this.height || hit != 0 /* NONE */) {
                clearTimeout(ammoAnimation);
                isPlayer ? ammo.setAmmoIndex(_this.plane.centerX - ammo.getAmmo().width / 2, _this.plane.getPlaneBody().y - 40) : ammo.initAmmoIndex();
                _this.startAmmoAnimation(ammo, isPlayer);
                // if (this.gameEnd()) {
                //     return;
                // }
            }
        }, 10);
    };
    //子弹碰撞检测
    Main.prototype.hitTest = function (ammo, isPlayer) {
        for (var i = 0, max = this.scene.enemyPlaneArr.length; i < max; i++) {
            var enemyPlane = this.scene.enemyPlaneArr[i];
            if (isPlayer && enemyPlane.getPlaneBody().hitTestPoint(ammo.centerX, ammo.centerY)) {
                enemyPlane.setHP(enemyPlane.getHP() - 1);
                this.textfield.text = "\u51FB\u4E2D\u4E86" + this.scene.enemyPlaneArr[i].getID() + "\u53F7\u654C\u673A";
                if (enemyPlane.getHP() <= 0) {
                    clearTimeout(this.scene.enemyAmmoArr[i].getAmmoAnimation());
                    this.scene.removeEnemyPlane(i);
                    console.log(this.scene.enemyAmmoArr);
                    return 4 /* ENEMDIT */;
                }
                return 2 /* ENEMHIT */;
            }
            else if (!isPlayer && this.plane.getPlaneBody().hitTestPoint(ammo.centerX, ammo.centerY)) {
                this.textfield.text = "\u51FB\u4E2D\u4E86\u81EA\u5DF1";
                this.plane.setHP(this.plane.getHP() - 1);
                if (this.plane.getHP() <= 0) {
                    return 3 /* PLAYERDIE */;
                }
                return 1 /* PLAYERHIT */;
            }
        }
        return 0 /* NONE */;
    };
    Main.prototype.gameEnd = function () {
        if (this.plane.getHP() <= 0) {
            this.textfield.text = '游戏结束 你输了';
            return true;
        }
        else if (!this.scene.enemyPlaneArr.length) {
            this.textfield.text = '游戏结束 你赢了';
            return true;
        }
        return false;
    };
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map