/**
 * 敌方飞机类
 */
class EnemyPlane extends Plane {
    private hpText: egret.TextField;
    constructor(body: string, x: number, y: number, ID: string, HP?: number) {
        super(body, x, y, ID);
        this.hpText = new egret.TextField();
        this.hpText.x = this.planeBody.x + 10;
        this.hpText.y = this.planeBody.y - 40;
        map.addChild(this.hpText);
        this.HP = HP;
    }
    public getHpText() {
        return this.hpText;
    }
    set HP(HP: number) {
        this._HP = HP;
        this.hpText.text = `${HP} ${this.ID}号敌机`;
    }
    get HP(): number {
        return this._HP;
    }
}