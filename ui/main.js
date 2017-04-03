console.log('Loaded!');
function validate()
{
    if(   document.getElementById("user").value == "swomiya"
       && document.getElementById("password").value == "openit" )
    {
        alert( "validation succeeded" );
        //location.href="run.html";
    }
    else
    {
        alert( "validation failed" );
        //location.href="fail.html";
    }
}