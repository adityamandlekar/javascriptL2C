function loadDataAndShowMessage() {
    var xhttp;
   
    if(window.XMLHttpRequest){
    xhttp = new XMLHttpRequest();
    }
    else{
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
   
   
   
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
    }
    };
    xhttp.open("GET", "ShipmentDetails.xml", true);
    xhttp.send();
   
    }
   
    function myFunction(xml) {
    var count = 0;
    var strTable = "<table border='1' id='resultTable'><thead><tr><th>ShipmentId</th><th>Name</th><th>Source</th><th>Destination</th><th>Start Date</th><th>Delivered Date</th></tr</thead><tbody>";
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("shipment");
    var enteredText = document.getElementById("name").value;
    for (var i = 0; i < x.length; i++) {
   
    var id = x[i].getElementsByTagName("shipmentId")[0].childNodes[0].nodeValue;
    var source = x[i].getElementsByTagName("source")[0].childNodes[0].nodeValue;
    var destination = x[i].getElementsByTagName("destination")[0].childNodes[0].nodeValue;
    var startDate = x[i].getElementsByTagName("startDate")[0].childNodes[0].nodeValue;
    var delDate = x[i].getElementsByTagName("deliveredDate")[0].childNodes[0].nodeValue;
    var name = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    if (enteredText == name) {
    strTable += "<tr><td>" + id + "</td><td>" + name + "</td><td>"
    + source + "</td><td>" + destination + "</td><td>"
    + startDate + "</td><td>" + delDate + "</td></tr>";
    count++;
    }
    }
   
    if (count > 0) {
    document.getElementById("result").innerHTML = strTable + "</tbody></table>";
    } else {
    document.getElementById("result").innerHTML = "<h2>No Result Found</h2>"
    }
    }