let use = prompt("Who's there?", ' ');
if (use == 'Admin') {
    let pass = prompt('password',' ');
        if (pass == 'TheMaster') {
            alert('Welcome');
        }
        else if (pass = null){
            alert('Canceled');

        }
        else alert('Wrong Password');

}
else if (use = null) {
    alert('Canceled');
}
else
    alert("I don't know you")