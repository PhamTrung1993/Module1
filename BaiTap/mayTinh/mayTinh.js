function add(){
    let a1 = document.getElementById("so1").value;
    let a2 = document.getElementById("so2").value;
    let a=Number(a1);
    let b=Number(a2);
    
    let s = a+b ;
    alert("Tổng 2 số là: " + s);
}
function sub(){
    let a1 = document.getElementById("so1").value;
    let a2 = document.getElementById("so2").value;
    let a = Number(a1);
    let b = Number(a2);
   
    let s = a-b;
    alert("Hiệu 2 số là: " + s);
}
function mul(){
    let a1 = document.getElementById("so1").value;
    let a2 = document.getElementById("so2").value;
    let a = Number(a1);
    let b = Number(a2);
   
    let s = a*b;
    alert("Tích 2 số là: " + s);
}
function div(){
    let a1 = document.getElementById("so1").value;
    let a2 = document.getElementById("so2").value;
    let a = Number(a1);
    let b = Number(a2);
    
    let s = a/b;
    alert("Thương 2 số là: " + s);
}