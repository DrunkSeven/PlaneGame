const enum hitIntroduce {
    'NONE',
    'PLAYERHIT',
    'ENEMHIT',
    'PLAYERDIE',
    'ENEMDIT',
};          //伤害描述

class Main extends eui.UILayer {
    protected createChildren(): void {
        super.createChildren();
        // egret.lifecycle.addLifecycleListener((context) => {
        //     // custom lifecycle plugin
        // })
        // egret.lifecycle.onResume = () => {
        //     egret.ticker.resume();
        // }
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame();
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }
    private plane: PlayerPlaneCtrl;
    private scene: Scene;
    private textfield: egret.TextField;
    protected createGameScene(): void {
        map = this;
        let sky: egret.Bitmap = this.createBitmapByName("bg_jpg");
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        this.addChild(sky);
        // let aboutAlert:About=new About();
        // this.addChild(aboutAlert);
        this.scene = new Scene();
        this.textfield = new egret.TextField();
        this.textfield.x = 100;
        this.textfield.y = 300;
        this.addChild(this.textfield);
        this.plane = new PlayerPlaneCtrl();
        let enemyPlaneCtrl: EnemyPlaneCtrl = new EnemyPlaneCtrl();
        let option = { enemyPlaneArr: enemyPlaneCtrl.enemyPlaneArr, enemyEmmoArr: enemyPlaneCtrl.enemyAmmoArr, playerEmmoArr: this.plane.playerAmmoArr }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onHitTest, option)
        // this.addEnemyPlane(6);
        // this.startAmmoAnimation(ammo, true);
    }
    //子弹碰撞检测
    private onHitTest(this) {
        this.enemyPlaneArr.forEach((plane: EnemyPlane) => {
            this.playerEmmoArr.forEach((ammo: Ammo) => {
                if (plane.getPlaneBody.hitTestPoint(ammo.centerX, ammo.centerY)) {
                    plane.HP = plane.HP - 1;
                    map.removeChild(ammo.getAmmo);
                    if (plane.HP <= 0) {
                        map.removeChild(plane.getPlaneBody);
                    }
                }
            });
        });
        this.enemyEmmoArr.forEach((ammo: Ammo) => {
            if (map.plane.playerPlane.getPlaneBody.hitTestPoint(ammo.centerX, ammo.centerY)) {
                map.plane.playerPlane.HP = map.plane.playerPlane.HP - 1;
            }
        })
        if (map.gameEnd(this.enemyPlaneArr.length)) {
            egret.lifecycle.onPause = () => {
                egret.ticker.pause();
            }
        }
    }
    private gameEnd(enemyNum: number): boolean {
        if (this.plane.playerPlane.HP <= 0) {
            this.textfield.text = '游戏结束 你输了';
            return true;
        } else if (!enemyNum) {
            this.textfield.text = '游戏结束 你赢了';
            return true;
        }
        return false;
    }
    public createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}
