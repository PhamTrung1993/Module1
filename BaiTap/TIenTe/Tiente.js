function chuyenDoi() {
    // nhập dữ liệu từ bàn phím vào hàm thông qua hàm document.getElementById(" ").value
    let money = document.getElementById("money").value;
    let from = document.getElementById("From").value;
    let to = document.getElementById("To").value;
    let Tien;
    

    if (from == "USD" && to == "VND") {
        Tien = (money * 23000) + "Đ";
        alert("số tiền đã chuyển là: " + Tien)
    }
    else if (from == "VND" && to == "USD") {
        Tien = (money / 23000) + "$";
        alert("số tiền đã chuyển là: " + Tien)
    }
    else {
        Tien = "Error!!!";
        alert(Tien)
    }
    

}   