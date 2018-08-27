class Plane {
    protected planeBody: eui.Image;                 //机体
    protected _HP: number = 10;                     //血量
    private _ID: string;                             //id
    public centerX: number;                         //飞机中心坐标x
    public centerY: number;                         //飞机中心坐标y
    public AmmoIndex: Array<number> = [0, 0];       //初始子弹位置
    constructor(protected body: string, x: number, y: number, ID: string = "PLAYER") {
        this.setPlaneBody = GameUtil.createBitmapByName(body);
        this.setPlaneIndex(x, y);
        this._ID = ID;
        map.addChild(this.planeBody);
    }
    public setPlaneIndex(x: number, y: number) {
        this.planeBody.x = x - this.planeBody.width / 2;
        this.planeBody.y = y - this.planeBody.height / 2;
        this.centerX = x;
        this.centerY = y;
    }
    get ID(): string {
        return this._ID;
    }
    get getPlaneBody(): eui.Image {
        return this.planeBody;
    }
    set setPlaneBody(planeBody: eui.Image) {
        this.planeBody = planeBody;
    }
    get HP(): number {
        console.log(this._HP);

        return this._HP;
    }
}
