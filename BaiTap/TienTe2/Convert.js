function ChuyenDoi(){
    // lấy số tiền cần chuyển
    let u = document.getElementById("money").value;
    // lấy loại tiền cần chuyển
    let a = document.getElementById("From").value;
    //lấy loại tiền muốn nhận
    let b = document.getElementById("To").value;
    // tính tỷ giá
    let d = a/b;
    // tính số tiền
    let c = u*d;

    alert("Số tiền đổi được là: " + c);

}