function sentIphonetoNokia () {

    let mess = document.getElementById("mess1").value;
    Iphone11.writeMessage(mess);
    Iphone11.sendMessage(Nokia);
    showinbox();
}
function sentNokiatoIphone () {
    let mess = document.getElementById("mess2").value;
    Nokia.writeMessage(mess);
    Nokia.sendMessage(Iphone11);
    showinbox();
}
function showinbox () {
    let inboxOfIphone = "";
    for (let i = 0; i < Iphone11.inbox.length; i++) {
       inboxOfIphone += Iphone11.inbox[i] + ",";       
    }
    document.getElementById("inbox1").innerHTML = inboxOfIphone;

    let inboxOfNokia = "";
    for (let i = 0; i < Nokia.inbox.length; i++) {
      inboxOfNokia += Nokia.inbox[i] + ",";
    }
    document.getElementById("inbox2").innerHTML = inboxOfNokia;
}