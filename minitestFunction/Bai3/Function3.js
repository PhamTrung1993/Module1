let array = '';
function importArray() {
    let length = +prompt("import array length: ")
        array = getArray(length);
            document.getElementById("Array").innerHTML = array;

}
function showTotal() {
    let  result = Total(array);
        document.getElementById("show").innerHTML = result;

}

function Total(arr) {
    let sum = 0;
    let result = '';
    let primeArray = new Array();
        for (let i = 0; i < arr.length;i++) {
            if (arr[i] < 2) {
                continue;
            }
            else if (checkPrime(arr[i])) {
                sum = sum + arr[i];
                primeArray.push(arr[i]);
            }
    }
        result = 'Prime Number in array is: ' + primeArray + ' and total : ' + sum;
    return result;
}
function checkPrime(number) {

    for (let j = 2; j <= Math.sqrt(number); j++) {
       if (number%j === 0) {
          return false;
       }
    }
    return true;
}
function getArray(length) {
    let array = new Array(length);
        for (let i = 0; i < array.length;i++) {
            array[i] = +prompt("import value of " + (i+1));
        }
    return array;
}
function reset() {
    document.getElementById("Array").innerHTML = "";
        document.getElementById("result").innerHTML = "";
}