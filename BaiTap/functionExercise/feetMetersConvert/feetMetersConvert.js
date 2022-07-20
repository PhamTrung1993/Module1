function feetToMeter(length) {
    let meter = length/3.2808 ;
    return meter;
}
function meterToFeet(length) {
    let feet = length * 3.2808;
    return feet;
}
function conVert() {
    let length = +(document.getElementById("input").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = "";


    if (from === "feet" && to === "meter") {
        result = feetToMeter(length);
    }
    else if (from === "meter" && to === "feet") {
        result=meterToFeet(length);
    }
    else {
        result = "please!check your input data"
    }

    document.getElementById("temper").innerHTML = result;

}
function reset() {
    document.getElementById("input").value = "";
    document.getElementById("temper").innerHTML = "";
}