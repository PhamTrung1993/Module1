function search() {

    const Eng = ['car', 'bycicle', 'motocycle', 'train', 'plane', 'truck', 'boat', 'bus', 'ship'];
    const Viet = ['ôtô', 'xe đạp', 'xe máy', 'tàu hỏa', 'máy bay', 'xe tải', 'thuyền', 'xe buýt', 'tàu thủy'];
    let Voc = document.getElementById('vocabulary').value;
    let d = 0;
    let Ket = '';

    for (let i = 0; i < Eng.length; i++) {
        if (Voc === Eng[i]) {
            d = i;
            for (let j = 0; j < Viet.length; j++) {
                if (d == j) {
                    Ket = Viet[j];
                }
            }
        }
    }
    document.getElementById("voCa").innerHTML = Ket.toUpperCase();
}