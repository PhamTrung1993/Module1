class perfumeManagement {
    constructor(array) {
        this.perfume = array;
    }
    showList () {
        let data = "";
        for (let i = 0 ; i < this.perfume.length ;i++) {

            data += "<tr>";

            data += '<td>';
            data += this.perfume[i].id;
            data += '</td>';

            data += '<td>';
            data += '<img width="150px" height="100px" src=' + this.perfume[i].img + '">';;
            data += '</td>';

            data += '<td>';
            data += this.perfume[i].name;
            data += '</td>';

            data += '<td>';
            data += this.perfume[i].gender;
            data += '</td>';

            data += '<td>';
            data += this.perfume[i].capacity;
            data += '</td>';

            data += '<td>';
            data += this.perfume[i].trademark;
            data += '</td>';

            data += '<td>';
            data += this.perfume[i].release_year;
            data += '</td>';

            data += '<td>';
            data += this.perfume[i].incense_group;
            data += '</td>';

            data += '<td>';
            data += this.perfume[i].price;
            data += '</td>';

            data += '<td><button onclick="editPerfum('+ i +')">Edit</button></td>'
            data += '<td><button onclick="deletePerfum('+ i +')" style="background-color: red">Delete</button></td>'

            data += "</tr>"
        }

        document.getElementById("list").innerHTML = data;
    }
    DeleTe(id) {
        this.perfume.splice(id, 1);
    }

    findPerfumeById(id) {
        return this.perfume[id];
    }
   edit(perfume,id,name,gender,capacity,trademark,release_year,incense_group,price,img) {
        perfume.edit(id,name,gender,capacity,trademark,release_year,incense_group,price,img)

    }
    addPerfume(perfume) {
        this.perfume.push(perfume)
    }


}
