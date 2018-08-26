class Plane {
    protected planeBody: eui.Image;              //机体
    protected HP: number = 10;                      //血量
    private readonly _id = "PLAYER";                //id
    public centerX: number;                         //飞机中心坐标x
    public centerY: number;                         //飞机中心坐标y
    public AmmoIndex: Array<number> = [0, 0];       //初始子弹位置
    constructor(protected body: string, x: number, y: number, HP?: number) {
        this.setPlaneBody = GameUtil.createBitmapByName(body);
        this.setPlaneIndex(x, y);
        map.addChild(this.planeBody);
    }
    public setPlaneIndex(x: number, y: number) {
        this.planeBody.x = x - this.planeBody.width / 2;
        this.planeBody.y = y - this.planeBody.height / 2;
        this.centerX = x;
        this.centerY = y;
    }
    get id(): string {
        return this._id;
    }
    get getPlaneBody(): eui.Image {
        return this.planeBody;
    }
    set setPlaneBody(planeBody: eui.Image) {
        this.planeBody = planeBody;
    }
    get getHP(): number {
        return this.HP;
    }
    set setHP(HP: number) {
        this.HP = HP;
    }
}
