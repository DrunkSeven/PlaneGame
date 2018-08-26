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
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })
        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }
        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }
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
        let enemyPlaneCtrl = new EnemyPlaneCtrl();
        // this.addEnemyPlane(6);
        // this.startAmmoAnimation(ammo, true);
    }
    //设置敌机 num 敌机数量
    private addEnemyPlane(num: number = 10) {
        for (let i = 0; i < num; i++) {
            let enemyPlane: EnemyPlane = new EnemyPlane(this.scene.enemyPlaneArr.length, this.createBitmapByName('aircraft_small_png'), GameUtil.setRandom(this.width - 40, 40), GameUtil.setRandom(180, 80), 1);
            let enemyAmmo: EnemyAmmo = new EnemyAmmo(this.createBitmapByName('enemyBullet_png'), [enemyPlane.centerX, enemyPlane.getPlaneBody.y + 40], -5);
            // this.startAmmoAnimation(enemyAmmo, false);
            this.scene.enemyPlaneArr.push(enemyPlane);
            this.scene.enemyAmmoArr.push(enemyAmmo);
        }
    }
    //子弹碰撞检测
    // private hitTest(ammo: Ammo, isPlayer: boolean): hitIntroduce {
    //     for (let i = 0, max = this.scene.enemyPlaneArr.length; i < max; i++) {
    //         let enemyPlane = this.scene.enemyPlaneArr[i];
    //         if (isPlayer && enemyPlane.getPlaneBody.hitTestPoint(ammo.centerX, ammo.centerY)) {
    //             enemyPlane.setHP=enemyPlane.getHP - 1;
    //             this.textfield.text = `击中了${this.scene.enemyPlaneArr[i].getID}号敌机`;
    //             if (enemyPlane.getHP <= 0) {
    //                 clearTimeout(this.scene.enemyAmmoArr[i].getAmmoAnimation);
    //                 this.scene.removeEnemyPlane(i);
    //                 console.log(this.scene.enemyAmmoArr);
    //                 return hitIntroduce.ENEMDIT;
    //             }
    //             return hitIntroduce.ENEMHIT;
    //         } else if (!isPlayer && this.plane.getPlaneBody.hitTestPoint(ammo.centerX, ammo.centerY)) {
    //             this.textfield.text = `击中了自己`;
    //             this.plane.setHP=this.plane.getHP - 1;
    //             if (this.plane.getHP <= 0) {
    //                 return hitIntroduce.PLAYERDIE;
    //             }
    //             return hitIntroduce.PLAYERHIT;
    //         }
    //     }
    //     return hitIntroduce.NONE;
    // }
    // private gameEnd() {
    //     if (this.plane.getHP <= 0) {
    //         this.textfield.text = '游戏结束 你输了';
    //         return true;
    //     } else if (!this.scene.enemyPlaneArr.length) {
    //         this.textfield.text = '游戏结束 你赢了';
    //         return true;
    //     }
    //     return false;
    // }
    public createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}
