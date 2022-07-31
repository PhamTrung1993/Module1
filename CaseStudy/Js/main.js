let dior1 = new Perfume('00001','Dior Sauvage Eau De Parfum','Male','10ml','Dior','2018','Hương hoa cỏ',550000,'https://perfume168.com/wp-content/uploads/2018/08/Dior-Sauvage-Eau-de-parfum.jpg' );
    let lacoste1 = new Perfume('00002','Lacoste Essential Men','Male','120ml','Lacoste','2018','Hương bạc hà và gỗ thơm',1450000,'https://perfume168.com/wp-content/uploads/2018/08/Lacoste-Essential.jpg' );
        let channel1 = new Perfume('00003','Chanel Bleu De Chanel Parfum','Male','50ml','Channel','2018','Hương chanh , cam,bạc hà và gỗ thơm',3450000,'https://perfume168.com/wp-content/uploads/2018/08/Chanel-Bleu-De-Chanel-Eau-De-Toilette-Men-1.jpg' );

let array = [dior1,lacoste1,channel1];
    let manager = new perfumeManagement(array);

function addPerfume () {
    let id = document.getElementById("idPerfume").value;
    if (id === " "){
        return;
    }
        let name = document.getElementById("perfumeName").value;
            let gender = document.getElementById("gender").value;
                let capacity = document.getElementById("capacity").value;
                    let trademark= document.getElementById("tradeMark").value;
                let release_year = document.getElementById("releaseYear").value;
            let incense_group= document.getElementById("incenseGroup").value;
        let price = document.getElementById("price").value;
    let img = document.getElementById("img").value;


        let perfume = new Perfume(id, name, gender, capacity, trademark, release_year, incense_group, price, img);
        manager.addPerfume(perfume);

        manager.showList();
            clear();
}

function clear () {
    document.getElementById("idPerfume").value = ' ';
        document.getElementById("perfumeName").value = ' ';
            document.getElementById("gender").value = ' ';
                document.getElementById("capacity").value = ' ';
                    document.getElementById("tradeMark").value = ' ';
                        document.getElementById("releaseYear").value = ' ';
                            document.getElementById("incenseGroup").value = ' ';
                                document.getElementById("price").value = ' ';
                                    document.getElementById("img").value = ' ';
}
function deletePerfum(id) {
    manager.DeleTe(id)
        manager.showList()
}
let perfumeID = 0;
function editPerfum(id){
    let perfume = manager.findPerfumeById(id);
        document.getElementById("idPerfume").value = perfume.id;
            document.getElementById("perfumeName").value = perfume.name;
                document.getElementById("gender").value = perfume.gender;
                    document.getElementById("capacity").value = perfume.capacity;
                        document.getElementById("tradeMark").value = perfume.trademark;
                            document.getElementById("releaseYear").value = perfume.release_year;
                                document.getElementById("incenseGroup").value = perfume.incense_group;
                                    document.getElementById("img").value = perfume.img;
                                        document.getElementById("price").value = perfume.price;

    perfumeID = id;
}
function updatePerfume() {
   let id = document.getElementById("idPerfume").value ;
       let name =document.getElementById("perfumeName").value ;
           let gender = document.getElementById("gender").value ;
               let capacity = document.getElementById("capacity").value ;
                   let trademark = document.getElementById("tradeMark").value ;
                       let release_year = document.getElementById("releaseYear").value ;
                           let incense_group = document.getElementById("incenseGroup").value ;
                               let price = document.getElementById("price").value ;
                                    let img = document.getElementById("img").value ;

   let perfume = manager.findPerfumeById(perfumeID);
    manager.edit(perfume,id,name,gender,capacity,trademark,release_year,incense_group,price,img)
        manager.showList();
            clear();
}
function Search(){
    let idSearch = document.getElementById("Search").value;
    let out = "";
    for (let i = 0; i < manager.perfume.length; i++) {

        if (idSearch === manager.perfume[i].id) {
           out = " Perfume Name is: " + manager.perfume[i].name + " " + manager.perfume[i].capacity
            break;
        }
        else {
            out = "không có"
        }
    }
    alert(out);


}
manager.showList()