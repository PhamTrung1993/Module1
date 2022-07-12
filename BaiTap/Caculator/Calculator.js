// khởi tạo hàm reset lại máy tính.
// Hàm clear() truy cập qua id của kết quả và xóa giá trị của nó
//  bằng cách gán cho nó một chuỗi trống. 
function  clear() {
    document.getElementById("result").value = "";
}
// Khởi tạo hàm display().xuất dữ liệu ra màn hình
// Hàm Display sử dụng id của kết quả và thêm giá trị của nút đc nhấn vào kết quả
function display(value) {
    document.getElementById("result").value += value;
}
// Đánh giá kết quả và trả lại
function calculate() {
    var p = document.getElementById("result").value;

    var q = eval(p);
    document.getElementById("result").value = q;
}