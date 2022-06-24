window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    snake = [];
    positioX = 10;
    positioY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 3;

    setInterval(game, 100);

    //controles
    document.addEventListener("keydown", function (e) {
        switch (e.keyCode) {

            case 39:
                velX = 1;
                velY = 0;
                break;
            case 37:
                velX = -1;
                velY = 0;
                break;
            case 38:
                velX = 0;
                velY = -1;
                break;
            case 40:
                velX = 0;
                velY = 1;
                break;
        }
    })
}

function game() {
    // config da tela
    ctx.fillStyle = "aqua";

    // distancia borda h, borda v, largura, altura
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //deslocamento 
    positioX += velX;
    positioY += velY;

    //    espelhamento
    if (positioX < 0) {
        positioX = grid;
    }
    if (positioX > grid) {
        positioX = 0;
    }
    if (positioY < 0) {
        positioY = grid;
    }
    if (positioY > grid) {
        positioY = 0;
    }

    //cobra

    ctx.fillStyle = "blue";
    for (i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x * grid, snake[i].y * grid, grid - 1, grid - 1)
        if (snake[i].x == positioX && snake[i].y == positioY) {
            tam = 3
        }

    }

    snake.push({ x: positioX, y: positioY })

    while (snake.length > tam) {
        snake.shift()
    }
    //comida
    ctx.fillStyle = "yellow";
    ctx.fillRect(foodX * grid, foodY * grid, grid - 1, grid - 1)

    //comendo 
    if (positioX == foodX && positioY == foodY) {
        tam++;
        foodX = Math.floor(Math.random() * grid);
        foodY = Math.floor(Math.random() * grid);

    }
}