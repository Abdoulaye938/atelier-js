// calcule de puissance

// const num = 15;
// const puissance = 3;
// let result = 1;

// for (let i = 0; i < puissance; i++) {
//   console.log(result);
//   result = result * num;
// }
// console.log(result);

// trouvez la plus grande valeur sur le tableau
// const tab = [-5, -110, 50, 47, -100, 28];
// const tab = prompt('Entrez un nombre:');
// let min = tab[0];
// let max = tab[0];

// for (let i = 1; i < tab.length; i++) {
//   if (tab[i] < min) {
//     min = tab[i];
//   } else {
//     max = tab[i];
//   }
// }
// console.log(max);

//-----------------exercice 1---------------------------
// alert(
//   'Voici les differente type de boucle: 1.for (for in, for of), 2.while, 3.do whille'
// );

let boucle = prompt(
  'Choisissez une boucle: 1.for, 2.for/in 3.for/of 4.while, 5.Do whille'
).toLowerCase();
if (boucle == 'for') {
  alert('1. for: boucle plusieurs fois sur un bloc de code');
} else if (boucle == 'for/in') {
  alert("2. for/in: boucle à travers les propriétés d'un objet");
} else if (boucle == 'for/of') {
  alert("3. for/of: boucle sur les valeurs d'un objet itérable");
} else if (boucle == 'while') {
  alert(
    "4. while: parcourt un bloc de code alors qu'une condition spécifiée est vraie"
  );
} else if (boucle == 'Do while') {
  alert(
    "5. Do while: boucle également à travers un bloc de code alors qu'une condition spécifiée est vraie"
  );
} else {
  alert("ce n'est pas un boucle");
}
