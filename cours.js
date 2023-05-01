let bonjour = document.getElementById('b1');
let ajouter = document.getElementById('b2');

bonjour.addEventListener('click', alert);
ajouter.addEventListener('click', ajout);

function alert(){
    alert('Bonjour');
}

function ajout(){
    let para = document.createComment('p');
    para.textContent = 'Paragraphe ajouté';
    document.body.appendChild(para); 
}