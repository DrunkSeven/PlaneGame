const GameUtil = {
    setRandom: (max: number, min: number = 0) => {
        return Math.ceil(Math.random() * (max - min) + min);
    }
}
