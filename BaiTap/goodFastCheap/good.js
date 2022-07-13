function sGood() {
    // sử dụng thuộc tính checked để thay đổi trạng thái checked cho checkbox
    var isG = document.getElementById("g").checked;
    var isC = document.getElementById("c").checked;
    var isF = document.getElementById("f").checked;
    console.log(isG,isC,isF);
    if (isC && isF) {
        if (Math.random() < 0.5) {
            document.getElementById("c").checked = false;
        }
        else {
            document.getElementById("f").checked = false;
        }
    }
}
function sCheap() {
    var isG = document.getElementById("g").checked;
    var isC = document.getElementById("c").checked;
    var isF = document.getElementById("f").checked;
    console.log(isG,isC,isF);
    if (isF && isG) {
        if (Math.random() < 0.5) {
            document.getElementById("g").checked = false;
        }
        else {
            document.getElementById("f").checked = false;
        }
    }
}
function sFast() {
    var isG = document.getElementById("g").checked;
    var isC = document.getElementById("c").checked;
    var isF = document.getElementById("f").checked;
    console.log(isG,isC,isF);
    if  (isG && isF) {
        if (Math.random() < 0.5) {
            document.getElementById("g").checked = false;
        }
        else {
            document.getElementById("c").checked = false;
        }
    }
}