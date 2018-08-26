/**
 * 敌方飞机类
 */
class EnemyPlane extends Plane {
    private ID:number;
    private hpText: egret.TextField;
    constructor(ID: number, body: egret.Bitmap, x: number, y: number, HP?: number) {
        super(body, x, y);
        this.ID = ID;
        this.hpText = new egret.TextField();
        this.hpText.x = this.planeBody.x + 10;
        this.hpText.y = this.planeBody.y - 40;
        map.addChild(this.hpText);
        this.setHP=HP;
    }
    public getHpText() {
        return this.hpText;
    }
    get getID():number {
        return this.ID;
    }
    set setHP(HP: number) {
        this.HP = HP;
        this.hpText.text = `${HP} ${this.ID}号敌机`;
    }
}