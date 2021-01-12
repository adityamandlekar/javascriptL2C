function check()
{

    var number =document.getElementById("input").value;
    if(isNaN(number))
    {
        document.getElementById("result").innerHTML = "The Given input is not a number";
    }
    else 
    {
        document.getElementById("result").innerHTML = "The Given input is a number";
    }

}
