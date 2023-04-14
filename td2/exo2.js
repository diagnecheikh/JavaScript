function afficherImage(img) {
    let imgGrande = document.getElementById('grandeImg');
    imgGrande.src = img.src;
    imgGrande.dataset.miniature = img.id;
    let miniatures = document.getElementsByClassName('mini');
    for (let i = 0; i < miniatures.length; i++) {
        miniatures[i].classList.remove('noir');
    }
    img.classList.add('noir');
}

function changerImage(id) {
    let imgGrande = document.getElementById('grandeImg');
    let imgMiniature = document.getElementById(imgGrande.dataset.miniature);
    let imgSuivante = null;
    if (id === 'left') {
        imgSuivante = imgMiniature.previousElementSibling;
    } else {
        imgSuivante = imgMiniature.nextElementSibling;
    }
    if (imgSuivante !== null) {
        afficherImage(imgSuivante);
    }
}