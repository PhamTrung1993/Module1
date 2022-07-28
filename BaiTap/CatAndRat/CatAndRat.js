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
    setWeightCat(weight) {
        this.weightCat = weight
    }

    getSpeedCat() {
        return this.speedCat;
    }
    setSpeedCat(speed) {
        this.speedCat = speed;
    }
    catchTheRat() {
        if (this.rat.speedRat < this.speedCat ) {
                     return true;
        }
        else {
                 return false;
        }
    }
    eatTheRat() {
        if ((this.rat.live) && (this.catchTheRat())) {
            this.weightCat = this.weightCat + this.rat.weightRat;
                this.rat.live = false;
                    alert(this.nameCat + " bắt được " + this.rat.nameRat)
                        alert(this.rat.nameRat + " đã bị " + this.nameCat + " ăn")
        }
        else
            alert(this.rat.nameRat + " chạy thoát khỏi " + this.nameCat)
    }
}

let Jerry =new Rat("Jerry",5,50);
    let Tom = new Cat("Tom",10,70,Jerry);

Jerry.ratLive();

Tom.catchTheRat();
    Tom.eatTheRat();
        console.log(Tom.getWeightCat());