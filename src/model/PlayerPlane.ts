/**
 * 玩家飞机类
 */
class PlayerPlane extends Plane {
    private hpText: egret.TextField;
    constructor(body: string, x: number, y: number, HP?: number) {
        super(body, x, y, HP);
        this.planeMove();
        this.hpText = new egret.TextField();
        map.addChild(this.hpText);
        this.setHP=5;
    }
    set setHP(HP: number) {
        this.HP = HP;
        this.hpText.text = `${HP}`;
    }
    public planeMove() {
        map.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e: egret.TouchEvent) => {
            this.setPlaneIndex(e.stageX, e.stageY);
        }, this);
    }
}