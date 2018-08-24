/**
 * 子弹类
 */
class Ammo {
    private ammoBody: egret.Bitmap;              //子弹本体
    private speed: number;                       //子弹速度
    private ammoAnimation: number;               //子弹动画编号
    private initialIndex: Array<number>          //子弹初始坐标;
    public centerX: number;                      //子弹中心坐标x
    public centerY: number;                      //子弹中心坐标y;
    constructor(ammo: egret.Bitmap, protected map: eui.UILayer, initialIndex: Array<number>, speed?: number) {
        this.setAmmo(ammo);
        map.addChild(ammo);
        this.setSpeed(speed || 5);
        this.initialIndex = [initialIndex[0] - this.getAmmo().width / 2, initialIndex[1]];
        this.initAmmoIndex();
    }
    public setAmmoAnimation(ammoAnimation) {
        this.ammoAnimation = ammoAnimation;
    }
    public getAmmoAnimation() {
        return this.ammoAnimation;
    }
    public getAmmoBody(): egret.Bitmap {
        return this.ammoBody;
    }
    public initAmmoIndex() {                 //初始化子弹坐标
        this.ammoBody.x = this.initialIndex[0];
        this.ammoBody.y = this.initialIndex[1];
    }
    public setAmmoIndex(x: number, y: number) {     //设置子弹位置
        this.ammoBody.x = x;
        this.ammoBody.y = y;
        this.centerX = x + this.ammoBody.width / 2;
        this.centerY = y + this.ammoBody.width / 2;
    }
    public getAmmo(): egret.Bitmap {
        return this.ammoBody;
    }
    public getSpeed(): number {
        return this.speed;
    }
    public setSpeed(speed: number) {
        this.speed = speed;
    }
    public setAmmo(ammoBody: egret.Bitmap) {
        this.ammoBody = ammoBody;
    }
    public toString() {
        console.log(`"速度:"${this.speed}中心坐标：${this.centerX},${this.centerY}`);
    }
}