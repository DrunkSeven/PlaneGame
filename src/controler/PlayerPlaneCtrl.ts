class PlayerPlaneCtrl {
    plane: PlayerPlane;
    ammoCtrl: AmmoCtrl;
    constructor() {
        this.plane = new PlayerPlane(GameUtil.createBitmapByName('aircraft_png'), map.width / 2, map.height - 100, 10);
        this.ammoCtrl = new AmmoCtrl(this.plane, 'aircraftBullet_png', { y: - 40 });
    }
}