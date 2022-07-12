function display(){
    let m =parseInt( document.getElementById("month").value);
    switch (m) {
        case 2 :
            document.getElementById("kQ").innerHTML='Tháng 2 có 28 hoặc 29 ngày!';
        break;
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 10 :
        case 12 :
           document.getElementById("kQ").innerHTML='Tháng ' + m + ' có 31 ngày!';
            break;
        case 2 :
        case 4 :
        case 6 :
        case 9 :
        case 11 :
            document.getElementById("kQ").innerHTML ='Tháng ' + m + ' có 30 ngày!'
            break;
        default :
            document.getElementById("kQ").innerHTML = 'Lỗi tháng';
            break;

    }
}