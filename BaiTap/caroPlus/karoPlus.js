

let d = document.getElementById("karo");

var m = 1;
var h = '';
var n;

function Star() {
    n = +prompt("Nhập chiều dài bàn caro: ")
    var f = new Array(n);
    for (let i = 0; i < n; i++) {
        f[i] = "."
    }
    for (let i = 0; i < f.length; i++) {
        h += "<br/>";
        for (let j = 0; j < f.length; j++) {
            h += "." + '&ensp;&ensp;';
        }
    }

h += "<br/><br/><input type='button' value='Changevalue' onClick='Change()'> "
d.innerHTML = h;
}
function Change() {
     h = '';
    let X = +prompt("Nhập vị trí x: ");
    let Y = +prompt("Nhập vị trí y: ");
    if (X > f.length - 1 || X < 0 || Y > f.length - 1 || Y < 0) {
        alert("Bạn đã nhập sai tọa độ. Hãy nhập lại")
    }
    if (m % 2 === 0) {
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
                        (f[i][j] === 'X' && f[i+1][j+1] === 'X' && f[i+2][j+2] ==='X') ||
                            (f[i][j] === 'X' && f[i+1][j-1] === 'X' && f[i+2][j-2] ==='X')
            )
                {
                    alert ("X thắng")
                }
            else if
            ((f[i][j] === 'O' && f[i][j+1] === 'O' && f[i][j+2] === 'O') ||
                (f[i][j] === 'O' && f[i+1][j] === 'O' && f[i+2][j] === 'O') ||
                    (f[i][j] === 'O' && f[i+1][j+1] === 'O' && f[i+2][j+2] ==='O') ||
                        (f[i][j] === 'X' && f[i+1][j-1] === 'O' && f[i+2][j-2] ==='O'))
            {
                alert("O thắng")
            } 
            
        }
    }
    

}