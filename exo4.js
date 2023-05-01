function changerColor(){
    if(document.getElementById("texte").style.color === "red"){
        document.getElementById("texte").style.color = "blue";
    }else{
        document.getElementById("texte").style.color = "red";
    }
}

function afficher(){
    document.getElementById("demo").style.display = "block";
}

function cacher(){
    document.getElementById("demo").style.display = "none";
}