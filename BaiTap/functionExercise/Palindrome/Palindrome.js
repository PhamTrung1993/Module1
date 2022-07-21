var text = '';
function showPalindrome() {
    text = document.getElementById("string").value;
    let result = '';
    if (check(text)) {
        result = 'True';
    }
    else {
        result = 'False'
    }
    document.getElementById("result").innerHTML = result;
}
function check(array) {

    for (let i = 0; i < (array.length)/2;i++) {
        if (array[i] !== array[array.length - i -1]) {
            return 0;
        }

    }
    return 1;
}