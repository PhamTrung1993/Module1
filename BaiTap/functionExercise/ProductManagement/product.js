let arr = ['Nikkon','Cannon','Fujitsu'];

function addProduct() {
    let newProduct = document.getElementById("new").value
    arr.push(newProduct)
    document.getElementById("new").value = ""
    displayProduct()
}

function displayProduct() {
    let data = "<table>"
    data += "<tr>"
    data += "<th colspan='2' id='title'>ProductName</th>"
    data += "<th>" + arr.length + " products</th>"
    data += "</tr>"
    for (let i = 0; i < arr.length; i++) {

        data += '<tr>'
        data += "<td width='60%'>" + arr[i] + "</td>"
        data += '<td><button onclick="Edit('+ i +')">Edit</button></td>'
        data += '<td><button onclick="Delete('+ i +')">Delete</button></td>'
        data += "</tr>"

    }

    data += "</table>"
    document.getElementById("display").innerHTML = data
}
function Delete(index) {
    console.log(index)
    arr.splice(index,1);
    displayProduct()
}
function Edit(index) {
    let Name = prompt("Nhập tên mới");
    arr[index] = Name;
    displayProduct()
}


