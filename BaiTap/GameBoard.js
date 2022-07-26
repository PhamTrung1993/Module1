class GameBoard {
    rows;
        cols;
         elementId;
            turn;
                cells;
                    isOver;
    constructor(rows, cols, elemendId) {
        this.rows = rows;
            this.cols = cols;
                this.elementId = elemendId;
                    this.turn = VALUE_O;
                        this.cells = [];
                            this.isOver = false;
    }
        draw() {
            let gameBoardDiv = document.getElementById(this.elementId);
                gameBoardDiv.innerHTML = "";
            for (let i = 0; i < this.rows;i++) {
                let row = [];
                    this.cells.push(row);
                        for (let j = 0; j < this.cols; j++) {
                            let cell = new Cell(i,j);
                                row.push(cell);
                                    gameBoardDiv.innerHTML += cell.getHtml();
                }
            }
        }
        play(x,y) {
            if (this.isOver) {
                return;
            }
            let cell = this.cells[x][y];
            if (cell.value === VALUE_EMPTY) {
                cell.value = this.turn;
                cell,draw();
                this.check(x,y);
                if (this.turn === VALUE_O) {
                    this.turn = VALUE_X;
                }
                else {
                    this.turn = VALUE_O;
                }
            }
            else {
                alert("Cell is not empty")
            }
        }
    check(x,y) {
        let cell = this.cells[x][y];
        var count = 1;
        var i = 1;
        while ((y + i < this.cols) && this.cells[x][y+i].value === cell.value) {
            count++;
            i++;
        }
        var i = 1;
        while ((y - i >= 0) && this.cells[x][y-i].value === cell.value) {
            count++;
            i++;
        }
        this.endGame(count);
        var count = 1;
        var i = 1;
        while ((x+i < this.rows) && this.cells[x+i][y].value === cell.value) {
            count++;
            i++;
        }
        var i = 1;
        while ((x-i >= 0) && this.cells[x-i][y].value === cell.value) {
            count++;
            i++
        }
        this.endGame(count);
        var count = 1;
        var i = 1;
        var j = 1;
        while((y+i < this.cols) && (x+i < this.rows) && this.cells[x+i][y+j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        var i = 1;
        var j = 1;
        while((x-i >= 0) && (y-j>=0) && this.cells[x-i][y-j].value === cell.value) {
            count++;
            i++;
            j++
        }
        this.endGame(count);
        var count = 1;
        var i = 1;
        var j = 1;
        while ((y+j < this.cols) && (x - i >= 0) && this.cells[x-i][y+i].value === cell.value) {
            count++;
            i++;
            j++;
        }
        var i = 1;
        var j = 1;
        while ((y - j >= 0) && (x+i < this.rows) && this.cells[x+i][y-j].value === cell.calue) {
            count++;
            i++;
            j++;
        }
        this.endGame(count);
    }
    endGame(count) {
        if (count > 5) {
            this.Over = true;
            alert("You won!!!");
        }
    }
}
function play(x,y) {
    gameBoard.play(x,y);
}
function star() {
    gameBoard = new GameBoard(DEFAULT_ROWS,DEFAULT_COLS,"game-board");
    gameBoard.draw();
}
var gameBoard;
star();
