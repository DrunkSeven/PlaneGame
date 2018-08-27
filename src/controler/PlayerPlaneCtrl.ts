class PlayerPlaneCtrl {
    private _playerPlane: PlayerPlane;
    private ammoCtrl: AmmoCtrl;
    constructor() {
        this._playerPlane = new PlayerPlane('aircraft_png', map.width / 2, map.height - 100, 10);
        this.ammoCtrl = new AmmoCtrl(this._playerPlane, 'aircraftBullet_png', { y: - 40 });
    }
    get playerPlane(): PlayerPlane {
        return this._playerPlane;
    }
    get playerAmmoArr(): Array<Ammo> {
        return this.ammoCtrl.ammoArr;
    }
}