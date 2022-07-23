let charArray = ''
function importArray() {
    let length = +prompt("import array length: ")
    charArray = getArray(length);
    document.getElementById("Array").innerHTML = charArray;

}
function showCharacters() {

    let char = document.getElementById("text").value;

    document.getElementById("output").innerHTML= checkCharacters(char);
}
function checkCharacters(char) {
    let count = checkCount(char);
    if (count > 0) {
        return count;
    }
    else if (count === 0) {
        return 0;
    }

}
function checkCount(char) {
    let count = 0;
    for (let i = 0 ; i < charArray.length; i++) {
        if (charArray[i] === char) {
            count = count +1;
        }
    }
    return count;
}

function getArray(length) {
    let array = new Array(length);
    for (let i = 0; i < array.length;i++) {
        array[i] = prompt("import value of " + (i+1));
    }
    return array;
}
function reset() {
    document.getElementById("Array").innerHTML = "";
        document.getElementById("text").value = "";
            document.getElementById("output").innerHTML = "";
}