var Card;

function proceedPayment(){
document.getElementById('payment').innerHTML = "<h2>Please Wait<br/>Your payment is processing</h2>";
    var millisecondsToWait = 2000;
    setTimeout(function() {
    document.getElementById('payment').innerHTML = "<h2>Payment Successful</h2>";
    }, millisecondsToWait);
}

function validate() {

    var select = document.getElementById('paymentOption');
    var po = select.options[select.selectedIndex].text;
    select = document.getElementById('cardType');
    var ct = select.options[select.selectedIndex].text;
    var cn = document.getElementById('cardNumber').value;
    var cvv = document.getElementById('cvv').value;
    var ed = document.getElementById('expireDate').value;
    var am = document.getElementById('amount').value;

    var valid = true;
    if(po == 'Please select'){
    valid = false;
    document.getElementById('optionWarning').innerHTML = "Please select the payment option";
    document.getElementById('optionWarning').style.color = 'red';
    }
    else{
    document.getElementById('optionWarning').innerHTML = "";
    document.getElementById('optionWarning').style.color = 'white';
    }
    if(ct == 'Please select'){
    valid = false;
    document.getElementById('typeWarning').innerHTML = "Please select the card type";
    document.getElementById('typeWarning').style.color = 'red';
    }
    else{
    document.getElementById('typeWarning').innerHTML = "";
    document.getElementById('typeWarning').style.color = 'white';
    }
    if(cn == null || cn == ""){
    valid = false;
    document.getElementById('cardWarning').innerHTML = "Please enter the card number";
    document.getElementById('cardWarning').style.color = 'red';
    }
    else if(cn.length != 16){
    valid = false;
    document.getElementById('cardWarning').innerHTML = "Card number must be a 16 digit number";
    document.getElementById('cardWarning').style.color = 'red';
    }
    else{
    document.getElementById('cardWarning').innerHTML = "";
    document.getElementById('cardWarning').style.color = 'white';
    }
    if(cvv == null || cvv == ""){
    valid = false;
    document.getElementById('cvvWarning').innerHTML = "Please enter the cvv number";
    document.getElementById('cvvWarning').style.color = 'red';
    }
    else if(cvv.length != 3){
    valid = false;
    document.getElementById('cvvWarning').innerHTML = "CVV must be a 3 digit number";
    document.getElementById('cvvWarning').style.color = 'red';
    }
    else{
    document.getElementById('cvvWarning').innerHTML = "";
    document.getElementById('cvvWarning').style.color = 'white';
    }
    var date = new Date();
    var cardDate = new Date(ed);
    if(cardDate == null || ed==null || ed==""){
        valid = false;
        console.log("hi");
        document.getElementById('dateWarning').innerHTML = "Please enter the expiry date";
        document.getElementById('dateWarning').style.color = 'red';
    }
    else if(date.getTime() > cardDate.getTime()){
        valid = false;
        document.getElementById('dateWarning').innerHTML = "Expiry date should be a future date";
        document.getElementById('dateWarning').style.color = 'red';
    }
    else{
        document.getElementById('dateWarning').innerHTML = "";
        document.getElementById('dateWarning').style.color = 'white';
    }
    if(am == null || am == ""){
        valid = false;
        document.getElementById('amountWarning').innerHTML = "Please enter the amount";
        document.getElementById('amountWarning').style.color = 'red';
    }
    else{
        document.getElementById('amountWarning').innerHTML = "";
        document.getElementById('amountWarning').style.color = 'white';
    }
    if(valid == true){
        var card = new Card(po, ct, cn, cvv, ed, am);
        proceedPayment();
    }
}


function Card(paymentOption, cardType, cardNumber, cvv, expireDate, amount){
        this.paymentOption = paymentOption;
        this.cardType = cardType;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expireDate = expireDate;
        this.amount = amount;
}
