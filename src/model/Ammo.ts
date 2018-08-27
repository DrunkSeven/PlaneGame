/**
 * 子弹类
 */
class Ammo {
    private ammoBody: eui.Image;              //子弹本体
    private speed: number;                       //子弹速度
    private _timeInterval: number;               //子弹发射时间间隔
    private ammoAnimation: number;               //子弹动画编号
    private initialIndex: Array<number>          //子弹初始坐标;
    private _ID: number;                          //子弹ID;
    private _parentID: string;                    //发射子弹的飞机的ID;
    public centerX: number;                      //子弹中心坐标x
    public centerY: number;                      //子弹中心坐标y;
    constructor(bodyImg: string, initialIndex: Array<number>, id: number, parendID: string, speed?: number) {
        this.setAmmo = GameUtil.createBitmapByName(bodyImg);
        this._ID = id;
        this._parentID = parendID;
        map.addChild(this.ammoBody);
        this.setSpeed = speed || 5;
        this.initialIndex = [initialIndex[0] - this.getAmmo.width / 2, initialIndex[1]];
        this.initAmmoIndex();
    }
    get ID() {
        return this._ID;
    }
    get timeInterval(): number {
        return this._timeInterval;
    }
    set timeInterval(_timeInterval) {
        this._timeInterval = _timeInterval;
    }
    set setAmmoAnimation(ammoAnimation) {
        this.ammoAnimation = ammoAnimation;
    }
    get parentID() {
        return this._parentID;
    }
    get getAmmoAnimation() {
        return this.ammoAnimation;
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
    get getAmmo(): eui.Image {
        return this.ammoBody;
    }
    get getSpeed(): number {
        return this.speed;
    }
    set setSpeed(speed: number) {
        this.speed = speed;
    }
    set setAmmo(ammoBody: eui.Image) {
        this.ammoBody = ammoBody;
    }
    public toString() {
        console.log(`"速度:"${this.speed}中心坐标：${this.centerX},${this.centerY}`);
    }
}