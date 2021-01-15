//script.js

var data = [];

function Commodity(Name, Weight, Length, Width, Height) {

    this.Name = Name;
    this.Weight = Weight;
    this.Length = Length;
    this.Width = Width;
    this.Height = Height;
}

function add() {
    var totalValue = 0;
    var name = document.getElementById("name").value;
    var weight = document.getElementById("weight").value;
    var length = document.getElementById("length").value;
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;

    data.push(new Commodity(name, weight, length, width, height));

    var table = document.getElementById("myTable");

    var count = data.length;

    var row = table.insertRow(parseInt(count));

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = weight;
    cell3.innerHTML = length;
    cell4.innerHTML = width;
    cell5.innerHTML = height;

    for (var j = 0; j < count; j++) {
        var val = data[j].Weight;
    if (val === "") {
        val = 0;
    }
    totalValue = parseInt(totalValue) + parseInt(val);
}
    document.getElementById("count").value = count;
    document.getElementById("total").value = totalValue;
    document.getElementById("name").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("height").value = "";
}