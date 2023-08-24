let multiplication = prompt('Entrez un chiffre :');
let affiche = '';

for (let i = 0; i < multiplication; i++) {
  const resultat = i * multiplication;
  affiche += `${multiplication} * ${i} = ${resultat} </br>`;
}

let affichage = document.getElementById('table');
affichage.innerHTML = `${affiche}`;
