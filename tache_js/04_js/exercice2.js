//table de multiplication

// const num = prompt('Entrez un nombre:');
// let affiche = '';

// for (let i = 1; i <= 10; i++) {
//   const result = i * num;
//   affiche += `${num} * ${i} = ${result} </br></br>`;
// }

// let affichage = document.getElementById('multiplication');
// affichage.innerHTML += `</br></br> ${affiche}`;

//--------------------------------while-------------------

const multiplication = prompt('Entrer un nombre');
let affiche = '';
let i = 0;

do {
  i = i + 1;
  const result = i * multiplication;
  affiche += `${multiplication} * ${i} = ${result} <br>`;
} while (i <= 10);
const affichage = document.getElementById('multiplication');
affichage.innerHTML += `<br>${affiche}`;
