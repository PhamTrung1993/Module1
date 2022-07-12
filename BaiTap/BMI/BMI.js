let weight= parseFloat(prompt("nhập chỉ số cân nặng", ' '));
let height = parseFloat(prompt("nhập chỉ số chiều cao", ''));

if (height < 10) {
    let bMi = weight / (height * height);
    if (bMi < 18.5) {
        alert(bMi + ' Underweight')
    } else if (bMi < 25.0) {
        alert(bMi + ' Normal');
    } else if (bMi < 30) {
        alert(bMi + ' Overweight');
    } else {
        alert(bMi + ' Obese')
    }
}
else { alert(' lỗi rồi ngơ ơi!');}