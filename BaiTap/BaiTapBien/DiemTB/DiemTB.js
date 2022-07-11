let VatLy; 
let HoaHoc;
let SinhHoc ;
VatLy = prompt("Nhập Điểm Vật Lý:",' ');
HoaHoc = prompt("Nhập Điểm Hóa Học:",' ');
SinhHoc = prompt("Nhập Điểm Sinh Học:",' ');
let VL = parseInt(VatLy);
let HH = parseInt(HoaHoc);
let SH = parseInt(SinhHoc);
let Tong=VL+HH+SH; 
let TB=Tong/3;

document.writeln("Điểm Trung Bình 3 môn của sinh viên là: " + TB);
document.writeln("Tổng điểm 3 môn là: " + Tong);