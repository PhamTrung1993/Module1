function temperature (c) {
    this.tempC = c;
    this.fromCtoF = function () {
        document.getElementById("resultF").innerHTML = c + " độ C = " + ((this.tempC*1.8)+32) + " độ F"
    }
    this.fromCtoK = function () {
        document.getElementById("resultK").innerHTML= c + " độ C = " + (this.tempC + 273) + " độ K"
    }
}
let temp = new temperature(25);
    temp.fromCtoF();
        temp.fromCtoK();