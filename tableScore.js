class tableScore {
    constructor(score)  {
        this._score = score;
    }
    updateTable() {
        // Обновление счётчика
        this._score += 1;
        this.draw();
    }
    draw() {
        // Отрисовка счётчика съеденых яблок
    }
    reset() {
        // Сброс очков до 0 при смерти змейки
        this._score = 0;
        this.draw()
    }
}



export default tableScore;