var map;
var GameUtil = {
    setRandom: function (max, min) {
        if (min === void 0) { min = 0; }
        return Math.ceil(Math.random() * (max - min) + min);
    },
    setOption: function (obj1, obj2) {
        for (var item1 in obj1) {
            for (var item2 in obj2) {
                if (item1 == item2) {
                    obj1[item1] = obj2[item2];
                }
            }
        }
        return obj1;
    },
    createBitmapByName: function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
};
//# sourceMappingURL=GmaeUtil.js.map