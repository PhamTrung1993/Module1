class Rat {
    live;
    soundRat
    constructor(name,weight,speed) {
        this.nameRat = name;
            this.weightRat = weight;
                this.speedRat = speed;
    }
    chirpRat(sound) {
        this.soundRat = sound
            alert(this.soundRat)
    }
    getNameRat() {
        return this.nameRat;
    }
    setNameRat(name) {
        this.nameRat = name;
    }
    getWeightRat() {
        return this.weightRat;
    }

    getSpeedRat() {
        return this.speedRat;
    }
    setSpeedRat(speed) {
        this.speedRat = speed;
    }
    getLiveRat() {
        if (this.live) {
            alert("Chuột sống");
        }
        else {
            alert("Chuột chết");
        }
    }
    ratDie() {
        return  this.live = false;
    }
    ratLive() {
        return this.live = true;
    }
}
class Cat {
    soundCat
    constructor(name,weight,speed,rat) {
        this.nameCat = name;
            this.weightCat = weight;
                this.speedCat = speed;
                    this.rat = rat;
    }
    chirp (sound) {
        this.soundCat = sound
            alert(this.soundCat)
    }
    getNameCat() {
        return this.nameCat;
    }
    setNameCat(name) {
        this.nameCat = name;
    }
    getWeightCat() {
        return this.weightCat;
    }

    getSpeedCat() {
        return this.speedCat;
    }
    setSpeed(speed) {
        this.speedCat = speed;
    }
    catchTheRat() {
        if (this.rat.speedRat < this.speedCat ) {
                alert(this.nameCat + "bắt được " + this.rat.nameRat)
                     return true;
        }
        else {
            alert(this.nameCat + " không bắt được " + this.rat.nameRat)
                 return false;
        }
    }
    eatTheRat() {
        if (this.rat.live) {
            this.weightCat = this.weightCat + this.rat.weightRat;
                this.rat.live = false;
                    alert(this.rat.nameRat + " đã bị " + this.nameCat + " ăn")
        }
    }
}

let Jerry =new Rat("Jerry",5,50);
    let Tom = new Cat("Tom",10,70,Jerry);

Jerry.ratLive();

Tom.catchTheRat();
    Tom.eatTheRat();
        console.log(Tom.getWeightCat());