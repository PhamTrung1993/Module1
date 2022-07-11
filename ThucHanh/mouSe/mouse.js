let imgObj = null;
imgObj = document.getElementById('myImage');
function init(){
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
// dùng hàm imgObj.style.left để đưa bóng sang phải theo từng lần click chuột.
function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 +'px';
}
window.onload = init;