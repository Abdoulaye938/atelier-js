let nombreAleatoire = '<ul>';
let nbrAlea = 10;
for (let i = 0; i < nbrAlea; i++) {
  nombreAleatoire =
    nombreAleatoire + '<li>' + Math.floor(Math.random() * 100) + '</li>';
}
nombreAleatoire = nombreAleatoire + '</ul>';
// document.body.innerHTML = html;
let affichage = document.getElementById('affiche');
affichage.innerHTML = `${nombreAleatoire}`;
