class Mobile {
    battery;
    draft;
    inbox;
    sent;
    isOn

    constructor(battery) {
        if (battery < 0 ) {
            throw new Error("Invalid Battery value: " + battery)
        }
        this.battery = battery;
        this.draft = "";
        this.inbox = [];
        this.sent = [];
        this.isOn = true;
    }

    checkOnOff () {
        return this.isOn = !this.isOn ;
    }
    change(time) {
        if (this.battery < 100) {
            this.battery += time;
        }
    }
    writeMessage(newMessage) {
        if (!this.isOn) {
            return;
        }
        else {
            this.draft = newMessage;
        }
    }
    sendMessage (newPhone){
        if (!this.isOn) {
            return;
        }
        else {
            let mess = this.draft;

            newPhone.inbox.push(mess);

            this.sent.push(mess);

            this.draft = "";

            this.battery--;
        }
    }
    
}
let Iphone11 = new Mobile(0);
let Nokia = new Mobile(50);