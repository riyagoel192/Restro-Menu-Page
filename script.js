function show_all()
{
    document.getElementById("all").style.display = "block";
    document.getElementById("breakfast").style.display = "none";
    document.getElementById("lunch").style.display = "none";
    document.getElementById("dinner").style.display = "none";
    document.getElementById("shake").style.display = "none";
}

function show_breakfast()
{
    document.getElementById("breakfast").style.display = "block";
    document.getElementById("all").style.display = "none";
    document.getElementById("lunch").style.display = "none";
    document.getElementById("dinner").style.display = "none";
    document.getElementById("shake").style.display = "none";
}

function show_lunch()
{
    document.getElementById("breakfast").style.display = "none";
    document.getElementById("all").style.display = "none";
    document.getElementById("lunch").style.display = "block";
    document.getElementById("dinner").style.display = "none";
    document.getElementById("shake").style.display = "none";
}

function show_shake()
{
    document.getElementById("breakfast").style.display = "none";
    document.getElementById("all").style.display = "none";
    document.getElementById("lunch").style.display = "none";
    document.getElementById("dinner").style.display = "none";
    document.getElementById("shake").style.display = "block";
}

function show_dinner()
{
    document.getElementById("breakfast").style.display = "none";
    document.getElementById("all").style.display = "none";
    document.getElementById("lunch").style.display = "none";
    document.getElementById("dinner").style.display = "block";
    document.getElementById("shake").style.display = "none";
}