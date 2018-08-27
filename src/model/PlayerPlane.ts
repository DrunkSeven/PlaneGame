/**
 * 玩家飞机类
 */
class PlayerPlane extends Plane {
    private hpText: egret.TextField;
    constructor(body: string, x: number, y: number, HP: number = 5) {
        super(body, x, y);
        this.planeMove();
        this.hpText = new egret.TextField();
        map.addChild(this.hpText);
        this.HP = HP;
    }
    set HP(HP: number) {
        this._HP = HP;
        this.hpText.text = `${HP}`;
    }
    get HP(): number {
        return this._HP;
    }
    public planeMove() {
        map.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e: egret.TouchEvent) => {
            this.setPlaneIndex(e.stageX, e.stageY);
        }, this);
    }
}