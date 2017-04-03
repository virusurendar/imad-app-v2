
var validate = function ()
{
    if(   document.getElementById("user").value == "swomiya"
       && document.getElementById("password").value == "openit" )
    {
        alert( "validation succeeded" );
        console.log('Loaded!');
        //location.href="run.html";
    }
    else
    {
        alert( "validation failed" );
        console.log('Loaded!');
        //location.href="fail.html";
    }
}