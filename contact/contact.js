document.getElementById("formulaire-contact").addEventListener("click", function (event) {
    event.preventDefault() // ne recharge pas la page
    formulaire() // appel de la fonction formulaire
});

const formulaire = () => {
    let nom = document.getElementById('nom-formulaire').value; // recupere la valeur du champs nom-formulaire
    let sujet = document.getElementById('sujet').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value
// si nom && sujet && email && message ont une valeur
    if (nom && sujet && email && message) {
        verificationEmail(email)
        // appel de la function verificationEmail avec en paramètre le variable email
    } else {
        alert('Veuillez remplire tous les champs.')
    }
}

const verificationEmail = (email) => {
    // ici dans le paramètre de la function je récupère la valeur email 
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // regex pour vérification email
    if (email.match(mailformat)) {
        // si le match entre la variable email introduite en paramètre et le mailformat est correct
        alert("Votre message a bien été envoyé !");
    }
    else {
        alert("Veuillez entrez une adresse email valide.");

    }
}