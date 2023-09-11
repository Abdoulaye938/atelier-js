// console.log(115 % 10);

function modulo(num1) {
  let result = num1 % 4;
  affiche = ` si on divise ${num1} par 4 le reste est de : ${result}`;
  //   return modulo;
}
let mod1 = parseInt(prompt('Entrez un nombre'));
// let mod2 = parseInt(prompt('Entrez un nombre'));
let affiche = '';
modulo(mod1);
let affichage = document.getElementById('modulo');
affichage.innerHTML = `${affiche}`;
