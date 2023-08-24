// Créez une fonction puissance qui :

// prend deux arguments
// réalise le calcul du premier argument élevé à la puissance du deuxième sans utiliser les fonctions mahtématiques de JS
// 💡 Utilisez une boucle par exemple x^n = x * x * x *x * ... n fois

function puissance(nombre, expo) {
  if (expo === 0) {
    return 1;
  } else if (expo < 0) {
    console.log("L'exposant doit être un entier positif ou nul.");
  }

  let resultat = 1;
  for (let i = 1; i <= expo; i++) {
    resultat *= nombre;
  }
  return resultat;
}
console.log(puissance(4, 4));

// module.exports = {
//   puissance: puissance,
// };
//////////////////////////////////////////////////////////////////////////////
// On souhaite stocker les positions d"une série de 20 objets mobiles (mobs) dans un jeu vidéo. Pour cela on va créer 2 tableaux :
// posX qui contient la série des abscisses des objets
// posY qui contient la série des ordonnées des objets
// Créez une fonction initXY :
// qui prend en 1er argument l'abscisse du 1er objet
// qui prend en 2ème argument l'ordonnée du 1er objet
// qui calcule les abscisses et ordonnés des objects de la série sachant qu'il doivent être espacés de 40 pixels (+40) les uns des autres en abscisse et de 30 pixels (+30) en ordonnée

function initXY(abscisse, ordonnee) {
  const numObjects = 20;
  const spacingX = 40;
  const spacingY = 30;

  const posX = [abscisse];
  const posY = [ordonnee];

  for (let i = 1; i < numObjects; i++) {
    const newX = posX[i - 1] + spacingX;
    const newY = posY[i - 1] + spacingY;
    posX.push(newX);
    posY.push(newY);
  }

  return { posX, posY };
}
console.log(initXY(10, 40));

////////////////////////////////////////////////////////////////////////////////
// Vous disposez d'un tableau contenant des nombres aléatoires et vous devez créer une fonction sortNumbers(tInit, tInf, tSup) qui va ranger :

// tous les éléments de tInit inférieurs à 10 dans le tableau tInf
// et tous les éléments de tInit supérieurs ou égaux à 10 dans le tableau tSup
// 💡 la fonction doit fonctionner quel que soit le tableau tInit

// Réalisez la fonction sortNumbers
const tInit = [1, 4, 34, 43, 5];
const tInf = [];
const tSup = [];

function sortNumbers(tInit, tInf, tSup) {
  for (let elements of tInit) {
    if (elements < 10) {
      tInf.push(elements);
    } else {
      tSup.push(elements);
    }
  }
}
sortNumbers(tInit, tInf, tSup);

console.log('Voici les elements de notre tableau', tInit);
console.log('Voici les elements inferieur a 10 de notre tableau', tInf);
console.log('Voici les elements superieur a 10 de notre tableau', tSup);
// // {
// module.exports = {
//   sortNumbers: sortNumbers,
// };
// // }
