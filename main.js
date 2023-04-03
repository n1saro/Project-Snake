import snake from './snake.js';
import gameField from './gamefield.js';
import apple from './apple.js';
import tableScore from './tableScore.js'


class main {
    constructor() {
        this.gameField = new gameField();
        this.snake = new snake();
        this.apple = new apple();
        this.tableScore = new tableScore(0);
    }

    draw() {

    }

}



export default main;