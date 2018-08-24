/**
 * 敌方飞机类
 */
class EnemyPlane extends Plane {
    private ID;
    private hpText: egret.TextField;
    constructor(ID: number, body: egret.Bitmap, map: eui.UILayer, x: number, y: number, HP?: number) {
        super(body, map, x, y);
        this.ID = ID;
        this.hpText = new egret.TextField();
        this.hpText.x = this.planeBody.x + 10;
        this.hpText.y = this.planeBody.y - 40;
        this.map.addChild(this.hpText);
        this.setHP(HP);
    }
    public getHpText() {
        return this.hpText;
    }
    getID() {
        return this.ID;
    }
    setHP(HP: number = 5) {
        this.HP = HP;
        this.hpText.text = `${HP} ${this.ID}号敌机`;
    }
}