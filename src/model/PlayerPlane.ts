/**
 * 玩家飞机类
 */
class PlayerPlane extends Plane {
    private hpText: egret.TextField;
    constructor(body: egret.Bitmap, map: eui.UILayer, x: number, y: number, HP?: number) {
        super(body, map, x, y, HP);
        this.planeMove(map);
        this.hpText = new egret.TextField();
        this.map.addChild(this.hpText);
        this.setHP=5;
    }
    set setHP(HP: number) {
        this.HP = HP;
        this.hpText.text = `${HP}`;
    }
    public planeMove(map: eui.UILayer) {
        map.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e: egret.TouchEvent) => {
            this.setPlaneIndex(e.stageX, e.stageY);
        }, this);
    }
}