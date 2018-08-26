class Plane {
    protected planeBody: egret.Bitmap;              //机体
    protected HP: number=10;                        //血量
    public centerX: number;                         //飞机中心坐标x
    public centerY: number;                         //飞机中心坐标y
    public AmmoIndex: Array<number> = [0, 0];       //初始子弹位置
    constructor(protected body: egret.Bitmap, x: number, y: number, HP?: number) {
        this.setPlaneBody=body;
        this.setPlaneIndex(x, y);
        map.addChild(body);
    }
    public setPlaneIndex(x: number, y: number) {
        this.planeBody.x = x - this.planeBody.width / 2;
        this.planeBody.y = y - this.planeBody.height / 2;
        this.centerX = x;
        this.centerY = y;
    }
    get getPlaneBody(): egret.Bitmap {
        return this.planeBody;
    }
    set setPlaneBody(planeBody: egret.Bitmap) {
        this.planeBody = planeBody;
    }
    get getHP(): number {
        return this.HP;
    }
    set setHP(HP: number) {
        this.HP = HP;
    }
}
