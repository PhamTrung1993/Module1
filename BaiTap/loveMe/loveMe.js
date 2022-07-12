function yesClick() {
    alert("Yêu người nhiều!!");
}
function noHoVer() {
    var x = Math.floor(Math.random() * window.innerHeight);
    var y = Math.floor( Math.random() * window.innerWidth);

    document.getElementById("no").style.top = x + "px";
    document.getElementById("no").style.left = y + "px";
}