function display() {
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var number = document.getElementById('number').value;
    var customer = new Customer(name, address, number);
    
    document.getElementById("result").innerHTML = customer.getInfo();
    
    }
    
    function Customer(name, address, number) {
    this.name = name;
    this.address = address;
    this.number = number;
    
    }
    Customer.prototype.getInfo= function(){
    return "Name :" + this.name + "<br>Address :" + this.address
    + "<br>Phone Number :" + this.number;
    };
    