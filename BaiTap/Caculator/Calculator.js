// khởi tạo hàm reset lại máy tính.
// Hàm clear() truy cập qua id của kết quả và xóa giá trị của nó
//  bằng cách gán cho nó một chuỗi trống.
let d = document.getElementById("result");
function  clear1() {
   d.value = "";
}
// Khởi tạo hàm display().xuất dữ liệu ra màn hình
// Hàm Display sử dụng id của kết quả và thêm giá trị của nút đc nhấn vào kết quả
function display(value) {
    d.value  += value;
}
// Đánh giá kết quả và trả lại
function calculate() {
    var p =d.value;
// phương thức eval() có chức năng tính toán biểu thức toán học
// hoặc thực thi mã lệnh tùy thuộc vào tham số mà người dùng truyền vào
    var q = eval(p);
    d.value = q;
}