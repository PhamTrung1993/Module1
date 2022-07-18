

let d = document.getElementById("karo");
let f = [];
var m = 1;
var h = '';
function init1() {
    var n = +prompt("Nhập chiều dài bàn caro: ")
    for (let i = 0; i < n; i++) {
        f[i] = new Array('.', '.', '.', '.', '.', '.', '.', '.')
    }
}
function Star() {
    for (let i = 0; i < n; i++) {
        h += "<br/>";
        for (let j = 0; j < n; j++) {
            h += f[i][j] + '&nbsp;&nbsp';
        }
    }

h += "<br/><br/><button type='button' value='star' onClick='Star()'> "
d.innerHTML = h;
}
function Change() {
     h = '';
    let X = +prompt("Nhập vị trí x: ");
    let Y = +prompt("Nhập vị trí y: ");
    if (m % 2 == 0) {
        f[X][Y] = 'O';
    }
    else {
        f[X][Y] = 'X';
    }
    m++
    for (let i = 0;i < n;i++){
        h += '<br>';
            for (let j = 0; j < n; j++){
                h+= f[i][j] + '&ensp;' +'&ensp;' ;
            }
        }
    h += "<br/><br/><input type='button' value='Changevalue' onClick='Change()'> "
    d.innerHTML = h;

    for (let i = 0; i < 8 ; i++) {
        for (let j = 0 ; j < 8; j++) {
            if ((f[i][j] === 'X' && f[i][j+1] === 'X' && f[i][j+2] === 'X') || 
                (f[i][j] === 'X' && f[i+1][j] === 'X' && f[i+2][j] === 'X') ||
                (f[i][j] === 'X' && f[i+1][j+1] === 'X' && f[i+2][j+2] ==='X')) 
                {
                    alert ("X thắng")
                }
            else if ((f[i][j] === 'O' && f[i][j+1] === 'O' && f[i][j+2] === 'O') ||
            (f[i][j] === 'O' && f[i+1][j] === 'O' && f[i+2][j] === 'O') ||
            (f[i][j] === 'O' && f[i+1][j+1] === 'O' && f[i+2][j+2] ==='O'))
            {
                alert("O thắng")
            } 
            
        }
    }
    

}