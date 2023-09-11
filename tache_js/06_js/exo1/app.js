// function multiplication() {
//   return num1 * num2;
// }
// multiplication();

// Les variables suivantes sont globales
// let num1 = 20;
// let num2 = 3;

// Cette fonction est définie dans la portée globale
function multiplier(nbr1, nbr2) {
  //   return num1 * num2;
  //   alert(nbr1 * nbr2);
  let result = nbr1 * nbr2;
  affiche = `${nbr1} * ${nbr2} = ${result}`;
  //   return result;
}
let num1 = parseInt(prompt('Entrez le premier nombre'));
let num2 = parseInt(prompt('Entrez le second nombre'));
let affiche = '';

multiplier(num1, num2); // Renvoie 60
let affichage = document.getElementById('calcul');
affichage.innerHTML += `<br>${affiche}`;

// console.log(multiplier);
