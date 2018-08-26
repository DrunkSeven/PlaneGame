class Scene {
    public enemyPlaneArr: Array<EnemyPlane> = [];
    public enemyAmmoArr: Array<EnemyAmmo> = [];
    public intervalArr: Array<number> = [];
    constructor() {}
    public removeEnemyPlane(i) {
        map.removeChild(this.enemyPlaneArr[i].getPlaneBody);
        map.removeChild(this.enemyPlaneArr[i].getHpText());
        this.enemyPlaneArr.splice(i, 1);
        this.removeEnemyAmmoArr(i);
    }
    public removeEnemyAmmoArr(i) {
        map.removeChild(this.enemyAmmoArr[i].getAmmoBody);
        clearTimeout(this.enemyAmmoArr[i].getAmmoAnimation);
        this.intervalArr.splice(i, 1);
        this.enemyAmmoArr.splice(i, 1);
    }
}