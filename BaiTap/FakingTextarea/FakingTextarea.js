var a23 = new Array();
var n1 = "";
a23[1] = 'I';a23[2] ='_';a23[3]='N';a23[4]='E';a23[5]='E';a23[6]='D';a23[7]='_';a23[8]='M';a23[9]='O';a23[10]='N';a23[11]='E';a23[12]='Y';a23[13]='!';a23[14]='!';a23[15]='!';
function typeTextArea() {
    let num = document.letter.txt.value;
    let i = num.length;
    if ( i > 0) {
        for (let j = 1;j <= i; j++) {
            n1 = n1 + a23[j];
            if ( j === 15) {
                document.letter.txt.value = "";
                n1 = "" ;
            }
        }
    }
    document.letter.txt.valueO = n1;
    n1 = "";
    setTimeout("typeTextArea()",1)
}