var assetArray = [];

function Asset(asset_id, type, name, mf) {
this.assetId = asset_id;
this.type = type;
this.supplier = name;
this.manufacturer = mf;

}

function addAsset() {

var assetId = document.getElementById('asset_id').value;
var type = document.getElementById('type').value;
var name = document.getElementById('supplier').value;
var mf = document.getElementById('manufacturer').value;
assetArray[assetArray.length] = new Asset(assetId, type, name, mf);

document.getElementById('asset_id').value = "";
document.getElementById('type').value = "";
document.getElementById('supplier').value = "";
document.getElementById('manufacturer').value = "";

// window.alert("HHH");
}

function displayAsset() {

var finalList = {};
var str = "<h2>Asset Details</h2><table id='tab'><tr><th>Asset Type</th><th>Quantity</th></tr>";

for (var i = 0; i < assetArray.length; i++) {
var aType = assetArray[i].type;
var val=finalList[aType];
if (val === undefined) {
finalList[aType] = 1;
} else {

finalList[aType] = Number(finalList[aType]) + 1;
}
}
for(var v in finalList) {

str = str + "<tr><td>" + v + "</td><td>" + finalList[v]
+ "</td></tr>";
}


str=str + "</table>";
document.getElementById("result").innerHTML = str;
assetArray = [];

}