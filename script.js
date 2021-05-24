function compute()
{
    var principal = document.getElementsById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var year = new Date(). getFullYear()+parseInt(years);
}
    function updateRate()
    {
        var rateval = document.getElementsById("rate").value;
        document.getElemntsById("rate_val").innerText=rateval;
    }


        
        