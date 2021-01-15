//script.js

function preloadDetails(){
    //fill code here
    var hour = document.getElementById('hour');
    for(i=1;i<=12;i++){
      var option = document.createElement('option');
      if(i<10){
        i = '0'+i;
      }
      option.appendChild(document.createTextNode(i));
      hour.appendChild(option);
}

var minute = document.getElementById('minute');
    for(i=0;i<=59;i++){
      var option = document.createElement('option');
      if(i < 10){
        i = '0'+i;
      }
  option.appendChild(document.createTextNode(i));
  minute.appendChild(option);
}

var format = document.getElementById('format');
var option = document.createElement('option');
option.appendChild(document.createTextNode('AM'));
format.appendChild(option);
option = document.createElement('option');
option.appendChild(document.createTextNode('PM'));
format.appendChild(option);

}

function fieldValidate(){
//fill code here
var valid = true;
var contact = document.getElementById('contact').value;
if(contact == ''){
  document.getElementById('contactError').innerHTML = 'Please enter the field';
  document.getElementById('contactError').style.color = 'red';
  valid = false;
}
else{
  document.getElementById('contactError').innerHTML = '';
}

var company = document.getElementById('company').value;
if(company == ''){
  document.getElementById('companyError').innerHTML = 'Please enter the field';
  document.getElementById('companyError').style.color = 'red';
  valid = false;
}
else{
  document.getElementById('companyError').innerHTML = '';
}

var address1 = document.getElementById('address1').value;
if(address1 == ''){
  document.getElementById('address1Error').innerHTML = 'Please enter the field';
  document.getElementById('address1Error').style.color = 'red';
  valid = false;
}
else{
  document.getElementById('address1Error').innerHTML = '';
}

var city = document.getElementById('city').value;
if(city == ''){
  document.getElementById('cityError').innerHTML = 'Please enter the field';
  document.getElementById('cityError').style.color = 'red';
  valid = false;
}
else{
  document.getElementById('cityError').innerHTML = '';
}

var zipCode = document.getElementById('zipcode').value;
if(zipCode == ''){
  document.getElementById('zipError').innerHTML = 'Please enter the field';
  document.getElementById('zipError').style.color = 'red';
  valid = false;
}
else{
  document.getElementById('zipError').innerHTML = '';
}

var phone = document.getElementById('phone').value;
if(phone == ''){
  document.getElementById('phoneError').innerHTML = 'Please enter the field';
  document.getElementById('phoneError').style.color = 'red';
  valid = false;
}
else{
  document.getElementById('phoneError').innerHTML = '';
}

var piece = document.getElementById('piece').value;
if(piece == ''){
  document.getElementById('pieceError').innerHTML = 'Please enter the field';
  document.getElementById('pieceError').style.color = 'red';
  valid = false;
}
else{
  document.getElementById('pieceError').innerHTML = '';
}

var weight = document.getElementById('weight').value;
if(weight == ''){
  document.getElementById('weightError').innerHTML = 'Please enter the field';
  document.getElementById('weightError').style.color = 'red';
  valid = false;
}
else{
  document.getElementById('weightError').innerHTML = '';
}

var locType = document.getElementById('locationType');
if(locType.value == 'Select'){
  document.getElementById('locationTypeError').innerHTML = 'Please enter the field';
  document.getElementById('locationTypeError').style.color = 'red';
  valid = false;
}
else{
  document.getElementById('locationTypeError').innerHTML = '';
}

var loc = document.getElementById('location').value;
if(loc == ''){
  document.getElementById('locationError').innerHTML = 'Please enter the field';
  document.getElementById('locationError').style.color = 'red';
  valid = false;
}
else{
  document.getElementById('locationError').innerHTML = '';
}
return valid;
}

function submitSchedule(){
//fill code here
if(fieldValidate()){
  var select = document.getElementById('hour');
  var h = select.options[select.selectedIndex].text;
  select = document.getElementById('minute');
  var m = select.options[select.selectedIndex].text;
  select = document.getElementById('format');
  var f = select.options[select.selectedIndex].text;
  
  //clearing fields
  var elements = document.getElementsByTagName('input');
  for(var i=0;i<elements.length;i++){
    if(elements[i].type == 'text'){
      elements[i].value = '';
    }
  }
  
  document.getElementById('result').innerHTML = 'Your Shipment pickup is scheduled at '+h+":"+m+f;
}
}

function time(){
var select = document.getElementById('hour');
var h = parseInt(select.options[select.selectedIndex].text);
select = document.getElementById('minute');
var m = select.options[select.selectedIndex].text;
select = document.getElementById('format');
var f = select.options[select.selectedIndex].text;
if(f == 'PM' && h<12){
  h = h+12;
}
if(f == 'AM' && h==12){
  h = h-12;
}
if(h < 10){
  h = '0'+h;
}
if(m < 10){
  m = '0'+m;
}

document.getElementById('pickupready').textContent = h+":"+m;

}
  
