class ElectricLamp {
    status;
    constructor() {
        this.status = false;
    }
    turnOff() {
        this.status = false;
    }
    turnOn() {
        this.status = true
    }
}
class SwitchButton{
    constructor() {
        this.status;
        this.lamp;
    }
    connectToLamp(lamp) {
        this.lamp = lamp
    }

    switchOff() {
        this.lamp.turnOff();
    }
    switchOn() {
        this.lamp.turnOn()
    }
}
let electricLamp = new ElectricLamp();
let switchButton = new SwitchButton();

switchButton.connectToLamp(electricLamp);
let count = 0;
while (count < 10) {
    alert(electricLamp.status);
    switchButton.switchOn();
    alert(electricLamp.status);
    switchButton.switchOff();
    count++;
}