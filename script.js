let fields = [];
let gameOver = false;
let currentShape = `cross`;

let Audio_TheEnd = new Audio('sounds/theend.mp3');

function fillShape(idShapes) {

    if (!fields[idShapes] && !gameOver) {
        if (currentShape == `cross`) { //Wenn "currentShape" den Wert Kreuz hat,
            currentShape = `circle`; //Dann ändert auf Kreis,
            document.getElementById('player-1').classList.add('player-inactive');
            document.getElementById('player-2').classList.remove('player-inactive');
        } else { // Ansonsten bleibt es beim Kreuz;
            currentShape = `cross`;
            document.getElementById('player-2').classList.add('player-inactive');
            document.getElementById('player-1').classList.remove('player-inactive');
        }

        fields[idShapes] = currentShape; //Array fields[0,1,2.....8] hat den Wert Kreuz;
        checkForWin();
        draw();
    }
}

function draw() {

    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == `cross`) {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
        if (fields[i] == `circle`) {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winner; // "undefined", "circle"

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0]; //winner bekommt den Wert, der in der Abfrage gefüllten Felder. 
        //Entweder circle, wenn alle Felder circle haben oder cross, wenn alle cross haben.
        document.getElementById('line-0').style.transform = `scaleX(1)`;
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[4];
        document.getElementById('line-1').style.transform = `scaleX(1)`;
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[7];
        document.getElementById('line-2').style.transform = `scaleX(1)`;
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-3').style.transform = `scaleX(1) rotate(90deg)`;
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = `scaleX(1) rotate(90deg)`;
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-5').style.transform = `scaleX(1) rotate(90deg)`;
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-6').style.transform = `scaleX(1) rotate(45deg)`;
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-7').style.transform = `scaleX(1) rotate(-45deg)`;
    }
    if (winner) {
        // gameOver = true;
        // Audio_TheEnd.play();
        // setTimeout(function() {
        //     document.getElementById('gameOver').classList.remove('d-none');
        //     document.getElementById('restartBtn').classList.remove('d-none');
        //     document.getElementById('table').classList.add('d-none');
        // }, 2000)

    }
}

function newGame() {
    fields = [];
    gameOver = false;
    draw();
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('restartBtn').classList.add('d-none');
    document.getElementById('table').classList.remove('d-none');

    for (let i = 0; i < 8; i++) {
        document.getElementById('line-' + i).style.transform = `scaleX(0) rotate(90deg)`;
    }
    for (let i = 0; i < 10; i++) {
        document.getElementById('cross-' + i).classList.add('d-none');
        document.getElementById('circle-' + i).classList.add('d-none');
    }
}