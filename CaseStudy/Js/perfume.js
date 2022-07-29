class Perfume {

    constructor (id,name,gender,capacity,trademark,release_year,incense_group,price,img) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.capacity = capacity;
        this.trademark = trademark;
        this.release_year = release_year;
        this.incense_group = incense_group;
        this.img = img;
        this.price = price
    }
    getId() {
        return this.Id;
    }
    setId(Id) {
        this.Id = Id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
    getCapacity() {
        return this.capacity;
    }
    setCapacity(capacity) {
        this.capacity = capacity;
    }
    gettrademark() {
        return this.trademark;
    } 
    settrademark(trademark) {
        this.trademark = trademark;
    }

    getRelease_year() {
        return this.release_year;
    }
    setRelease_year(release_year) {
        this.release_year = release_year;
    }
    getIncesse_group() {
        return this.incense_group;
    }
    setIncesse_group(incense_group) {
        this.incense_group = incense_group
    }
    getImg() {
        return this.img;
    }
    setImg(img) {
        this.img = img
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    edit(id,name,gender,capacity,trademark,release_year,incense_group,price,img) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.capacity = capacity
        this.trademark = trademark;
        this.release_year = release_year;
        this.incense_group = incense_group
        this.price = price;
        this.img = img;

    }

}