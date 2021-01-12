function validate() {

    var value = document.getElementById("mobileNumber").value;
   
   
    if (value.indexOf("(") == 0 && value.indexOf(")") == 4) {
   
    document.getElementById("result").innerHTML = "<span style=\"color:green\">Mobile Number is valid<//span>";
   
    } else {
    document.getElementById("result").innerHTML = "<span style=\"color:red\">Mobile Number is invalid<//span>";
   
    }
   
    }
       