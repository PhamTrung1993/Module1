class perfumeManagement {
    constructor(array) {
        this.perfume = array;
    }
    showList () {
        let data = "<table>";
        for (let i = 0 ; i < this.perfume.length ;i++) {

            data += "<tr>";
            
            data += '<td>';
            data += this.perfume[i].name;
            data += '</td>';

            data += '<td>';
            data += this.perfume[i].sex;
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
            data += '<img width="150px" height="100px" src=' + this.perfume[i].img + '">';;
            data += '</td>';

            data += '<td>';
            data += this.perfume[i].price;
            data += '</td>';

            data += '<td><button onclick="Edit('+ i +')">Edit</button></td>'
            data += '<td><button onclick="Delete('+ i +')">Delete</button></td>'

            data += "</tr>"
        }
    }
}