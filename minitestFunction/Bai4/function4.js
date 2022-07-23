function primeless(num) {
    let number = 2
    let primeArray = new Array()
    while(number < num) {
        let check = true;
        for (let j = 2; j <= Math.sqrt(number); j++) {
            if (number%j === 0){
                check = false;
                break
            }
        }
        if (check) {
            primeArray.push(number)
        }
        number ++
    }
    return primeArray
}
function totalprime(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
let number = 500;
let primeArray = primeless(number);
let total= totalprime (primeArray);
document.getElementById("showprime").innerHTML="Các số nguyên tố nhỏ hơn " + number + " là:"+"</br>" + primeArray;
document.getElementById("showtotal").innerHTML="Tổng các số nguyên tố nhỏ hơn "+ number + " là: " + total;
