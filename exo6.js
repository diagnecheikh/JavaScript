function triangle(taille){

    for(let i = 0; i <= taille; i++){
        let ligne = "";
        for(let j = 0; j<=i; j++){
            ligne += "*"; 
        }
        document.getElementById("texte").innerHTML += ligne + "<br>"; 
    }
    
}