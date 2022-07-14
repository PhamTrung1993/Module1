function run() {
        let n = parseInt(prompt("Nhập khoảng muốn đoán : ", ' '));
        let d = parseInt(prompt("Nhập số bạn đoán: ",''));
        let r = Math.floor(Math.random()*(n+1));
        console.log(r)
        let t = 0;
        while (d != r ) {
            t ++ ;

            if (t == 4) {

                break;
            }
            else if ( d < r) {
             alert(" số bạn đoán bé hơn");
            }
            else if (d > r) {
                alert("số bạn đoán lớn hơn");
            }

            d = parseInt(prompt("nhập số bạn đoán"))

        }
        if ( t > 3){
            alert("Bạn đã hết số lần đoán")
        }
        else {
            alert(" bạn đã đoán đúng số.chúc mừng bạn!!")
        }


}