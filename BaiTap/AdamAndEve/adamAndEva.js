class Apple {
    constructor(weight) {
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    setWeight() {
        this.weight = weight;
    }
    isEmpty() {
        if(this.weight === 0) {
            return true;
        }
        else {
            return false
        }
    }
    decreaseApple() {
        if(this.isEmpty()) {
            alert("Táo đã hết!!")
        }
        else {
            this.weight--
        }
    }
}
class Human{
    name;
    gender;
    weight;
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = "";
        this.weight = weight
    }
    isMale() {
        if (this.gender === "male") {
            return true;
        }
        else {
            return false
        }
    }
    getGender() {
        if (this.isMale()) {
            return "Male";
        }
        else {
            return "Female"
        }
    }
    setGender(sex) {
        return this.gender = sex;
    }
    setWeight(weight) {
        this.weight = weight
    }
    say(string) {
        console.log(string);
    }
    eatApple(apple) {
        if (apple.getWeight() > 0) {
            apple.decreaseApple()
            this.weight++;
        }
    }
    getInfo(human) {
        alert(human.name + " " + human.weight + " " + human.getGender())
    }
}
let Adam = new Human("adam","Male",70);
let Eva = new Human("Eva","Female,50");
let apple1 = new Apple(5);

while (apple1.weight > 0) {
    document.write("Adam ăn táo " + "</br>");
        Adam.eatApple(apple1);
            document.write("Quả táo còn: " + "<br/>" );
                document.write(apple1.getWeight() + "đơn vị " + "<br/>");
    document.write("<br/>");

    document.write("Eva ăn táo " + "<br/>");
        Eva.eatApple(apple1);
            document.write("Quả táo còn " + "<br/>") ;
                document.write(apple1.getWeight() + "đơn vị " +"<br/>");
    document.write("<br/>");
}