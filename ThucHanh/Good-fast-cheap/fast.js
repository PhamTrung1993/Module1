function switchGood() {
    var isGood = document.getElementById("g").checked;
    var isCheap = document.getElementById("c").checked;
    var isFast = document.getElementById("f").checked;
    console.log(isGood,isCheap,isFast);
    if (isCheap && isFast) {
        if (Math.random() < 0.5) {
            document.getElementById("c").checked = false;
        } else {
            document.getElementById("f").checked = false;
        }
    }
}
function switchCheap() {
    var isGood = document.getElementById("g").checked;
    var isCheap = document.getElementById("c").checked;
    var isFast = document.getElementById("f").checked;
    console.log(isGood,isCheap,isFast);
    if (isGood && isFast) {
        if (Math.random() < 0.5) {
            document.getElementById("g").checked = false
        } else {
            document.getElementById("f").checked = false
        }
    }
}
function switchFast() {
    var isGood = document.getElementById("g").checked;
    var isCheap = document.getElementById("c").checked;
    var isFast = document.getElementById("f").checked;
    console.log(isGood,isCheap,isFast);
    if (isGood && isCheap) {
        if (Math.random() < 0.5) {
            document.getElementById("c").checked = false
        } else {
            document.getElementById("f").checked = false
        }
    }
}