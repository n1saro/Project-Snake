class Snake {
    constructor() {
        // Размер змейки = 3 клетки , color , position x ,y
        const positionSnake = {
            x:160 ,
            y:160 , 
        }
    }

    deathSnake() {
        // Смерть змейки
    }

    update() {
        // Обновление змейки 
    }

    controlKey() {             
        // Обработка нажатий <- ->
        window.addEventListener('keydown' , function(event) {
            // Если стрелочка <- нажата
            if(event.code === 'KeyArrowLeft' ) {
                console.log('ArrowLeft');
            }
            // Если стрелочка вперёд нажата
            if(event.code === 'KeyArrowUp') {
                console.log('ArrowUp');
            }
            // Если стрелочка -> нажата
            if(event.code === 'KeyArrowRight') {
                console.log('ArrowRight');
            }
        }) 

    }

    draw() {
        // Отрисовка змейки 
    }
}



export default Snake

