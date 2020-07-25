function Scriptconnect()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username=="quartz" && password == "insight")
    {
        window.location.href = "profile.html"
    }
    else
    {
        alert("identifiants invalides");
    }
}