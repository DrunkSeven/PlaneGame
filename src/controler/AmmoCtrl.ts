class AmmoCtrl {
    private _ammoArr: Array<Ammo> = [];
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
            let ammo: Ammo = new Ammo(ammoImg, [plane.centerX + this.option.x, plane.getPlaneBody.y + this.option.y], this._ammoArr.length, this.option.speed);
            ammo.getAmmo.addEventListener(eui.UIEvent.REMOVED, this.onRemove, { ammo: ammo, ammoArr: this._ammoArr });
            this._ammoArr.push(ammo);
            this.startAmmoAnimation(ammo, this.option.direction);
            if (this.option.count && this._ammoArr.length == this.option.count) {
                clearInterval(interval);
            }
        }, this.option.timeInterval);
    }
    onRemove(this: any) {
        this.ammoArr.splice(this.ammoArr.findIndex(item => {
            return item.ID == this.ammo.ID;
        }), 1);
        clearTimeout(this.ammo.getAmmoAnimation);
    }
    get ammoArr() {
        return this._ammoArr;
    }
    //子弹动画
    private startAmmoAnimation(ammo: Ammo, direction: number, isPlayer?: boolean) {
        let ammoAnimation: number = setInterval(() => {
            ammo.setAmmoAnimation = ammoAnimation;
            ammo.setAmmoIndex(ammo.getAmmo.x, ammo.getAmmo.y - direction);
            // let hit = this.hitTest(ammo, isPlayer);
            if (ammo.getAmmo.y < -5) {
                clearTimeout(ammoAnimation);
                map.removeChild(ammo.getAmmo);

                // isPlayer ? ammo.setAmmoIndex(this.plane.centerX - ammo.getAmmo.width / 2, this.plane.getPlaneBody.y - 40) : ammo.initAmmoIndex();
                // this.startAmmoAnimation(ammo, isPlayer);
                // if (this.gameEnd()) {
                //     return;
                // }
            }
        }, ammo.getSpeed);
        this.intervalArr.push(ammoAnimation);
    }
}