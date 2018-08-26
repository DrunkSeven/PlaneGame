let map: Main;
const GameUtil = {
    setRandom: (max: number, min: number = 0): number => {
        return Math.ceil(Math.random() * (max - min) + min);
    },
    setOption(obj1, obj2) {
        for (let item1 in obj1) {
            for (let item2 in obj2) {
                if (item1 == item2) {
                    obj1[item1] = obj2[item2];
                }
            }
        }
        return obj1;
    },
    createBitmapByName: (name: string): eui.Image => {
        let result = new eui.Image();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}
