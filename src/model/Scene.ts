class Scene {
    public enemyPlaneArr: Array<EnemyPlane> = [];
    public enemyAmmoArr: Array<EnemyAmmo> = [];
    public intervalArr: Array<number> = [];
    private map: eui.UILayer;
    constructor(map: eui.UILayer) {
        this.map = map;
    }
    public removeEnemyPlane(i) {
        this.map.removeChild(this.enemyPlaneArr[i].getPlaneBody);
        this.map.removeChild(this.enemyPlaneArr[i].getHpText());
        this.enemyPlaneArr.splice(i, 1);
        this.removeEnemyAmmoArr(i);
    }
    public removeEnemyAmmoArr(i) {
        this.map.removeChild(this.enemyAmmoArr[i].getAmmoBody);
        clearTimeout(this.enemyAmmoArr[i].getAmmoAnimation);
        this.intervalArr.splice(i, 1);
        this.enemyAmmoArr.splice(i, 1);
    }
}