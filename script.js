function validate() {

    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var mobileNumber = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var flag = true;
    if (name == "" || name == null) {
    document.getElementById("nameWarning").innerHTML = "Please Enter the name";
    flag = false;
    }
    if (mobileNumber == "" || mobileNumber == null) {
    document.getElementById("mobileWarning").innerHTML = "Please Enter the mobile number";
    flag = false;
    } else if (mobileNumber.length != 10) {
    document.getElementById("mobileWarning").innerHTML = "Invalid MobileNumber";
    flag = false;
    }
    if (email == "" || email == null) {
    document.getElementById("emailWarning").innerHTML = "Please enter the E-mail";
    flag = false;
    } else if (!validateEmail(email)) {
    document.getElementById("emailWarning").innerHTML = "Invalid Email";
    flag = false;
    }
    var user = new User(name, address, mobileNumber, email);
    if (flag) {
    bindValues(user);
    }
    }
    
    function validateEmail(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
    }
    
    function bindValues(user) {
    
    var text = "Name :" + user.name + "<br>Address :" + user.address
    + "<br>Mobile Number :" + user.mobileNumber + "<br>Email :"
    + user.email;
    
    document.getElementById("result").innerHTML = text;
    
    }
    
    function User(name, address, mobileNumber, email) {
    
    this.name = name;
    this.address = address;
    this.mobileNumber = mobileNumber;
    this.email = email;
    
    }