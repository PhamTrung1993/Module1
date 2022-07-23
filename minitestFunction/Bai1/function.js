let array = '';
function importArray() {
    let length = +prompt("import array length: ")
        array = getArray(length);
            document.getElementById("Array").innerHTML = array;
}
function showEven() {
    let  result = checkEven(array);
        document.getElementById("result").innerHTML = result;
}
function checkEven(arr) {
    let count = 0;
    let result = '';
    let evenArray = new Array()
        for (let i = 0 ; i < arr.length; i++) {
            if (arr[i]%2 === 0) {
                count = count +1;
                    evenArray.push(arr[i])
            }
        }
        if (count === 0 ) {
            result = 'Arrays without even numbers';
        }
        else {
            result = 'Array with ' + count + ' even number is: ' + evenArray;
        }
    return result;
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