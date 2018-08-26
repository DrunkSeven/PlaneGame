class AmmoCtrl {
    private ammo: Ammo;
    ammoArr: Array<Ammo> = [];
    intervalArr: Array<number> = [];
    private option = {
        x: 0,
        y: 0,
        direction: 5,
        count: 0,
        speed: 10,
        timeInterval: 500
    }
    /**
     * option设置;
     * x:子弹相对于初始坐标x;
     * y:子弹相对于初始坐标y;
     * direction:子弹方向;
     * count:子弹数量;
     * speed:子弹速度;
     * timeInterval:子弹发射时间间隔;
     */
    constructor(plane: Plane, ammoImg: string, option: any = {}) {
        GameUtil.setOption(this.option, option);
        let interval = setInterval(() => {
            let ammo: Ammo = new Ammo(GameUtil.createBitmapByName(ammoImg), [plane.centerX + this.option.x, plane.getPlaneBody.y + this.option.y], this.option.speed);
            this.ammoArr.push(ammo);
            this.startAmmoAnimation(ammo, this.option.direction);
            if (this.option.count && this.ammoArr.length == this.option.count) {
                clearInterval(interval);
            }
        }, this.option.timeInterval);
    }

    //子弹动画
    private startAmmoAnimation(ammo: Ammo, direction: number, isPlayer?: boolean) {
        let ammoAnimation: number = setInterval(() => {
            ammo.setAmmoAnimation = ammoAnimation;
            ammo.setAmmoIndex(ammo.getAmmo.x, ammo.getAmmo.y - direction);
            // let hit = this.hitTest(ammo, isPlayer);
            if (ammo.getAmmo.y < -5) {
                clearTimeout(ammoAnimation);
                map.removeChild(ammo.getAmmoBody);
                // isPlayer ? ammo.setAmmoIndex(this.plane.centerX - ammo.getAmmo.width / 2, this.plane.getPlaneBody.y - 40) : ammo.initAmmoIndex();
                // this.startAmmoAnimation(ammo, isPlayer);
                // if (this.gameEnd()) {
                //     return;
                // }
            }
        }, ammo.getSpeed);
        this.intervalArr.push(ammoAnimation);
    }
    //子弹碰撞检测
    private hitTest(ammo: Ammo, isPlayer: boolean): hitIntroduce {
        for (let i = 0, max = this.scene.enemyPlaneArr.length; i < max; i++) {
            let enemyPlane = this.scene.enemyPlaneArr[i];
            if (isPlayer && enemyPlane.getPlaneBody.hitTestPoint(ammo.centerX, ammo.centerY)) {
                enemyPlane.setHP = enemyPlane.getHP - 1;
                this.textfield.text = `击中了${this.scene.enemyPlaneArr[i].getID}号敌机`;
                if (enemyPlane.getHP <= 0) {
                    clearTimeout(this.scene.enemyAmmoArr[i].getAmmoAnimation);
                    this.scene.removeEnemyPlane(i);
                    console.log(this.scene.enemyAmmoArr);
                    return hitIntroduce.ENEMDIT;
                }
                return hitIntroduce.ENEMHIT;
            } else if (!isPlayer && this.plane.getPlaneBody.hitTestPoint(ammo.centerX, ammo.centerY)) {
                this.textfield.text = `击中了自己`;
                this.plane.setHP = this.plane.getHP - 1;
                if (this.plane.getHP <= 0) {
                    return hitIntroduce.PLAYERDIE;
                }
                return hitIntroduce.PLAYERHIT;
            }
        }
        return hitIntroduce.NONE;
    }
}