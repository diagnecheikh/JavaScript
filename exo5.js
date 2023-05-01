
function creeTriangle(longueur){

    for(let i = 1; i<=longueur; i++){
         let triangle = "";

        for(let j = 1; j <= i; j++){
            triangle += "*";
        }

        document.getElementById('texte').innerHTML += triangle + "<br>";
    }

}

function reset(){
    document.getElementById("texte").innerHTML = "";
}

