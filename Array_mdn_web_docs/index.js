let fruits = ["Apple", "Banana"];

console.log(fruits);

// Accéder (via son index) à un élément du tableau

let first = fruits[0];

let last = fruits[fruits.length - 1];

// boucler un tableau

fruits.forEach(function (item, index, array) {
  console.log(item, index);
});

///////////////////////
let A = [10, 20, 30, 40, 50];
console.log(A.length);

A.forEach(function (item, index, array) {
  console.log(item, index);
});

// Ajouter à la fin du tableau
let newLenght = fruits.push("orange");

// Supprimer le premier élément du tableau
let supFruits = fruits.pop();
console.log(supFruits[1]);

///////////////////////

let shopping = ["pain", "lait", "fromage", "houmous", "nouilles"];
console.log(shopping);

// ajouter
let shopping1 = shopping.push("viande");
console.log(shopping1);
console.log(shopping);
//////
let newLength = fruits.unshift("Strawberry");
console.log(newLenght);
console.log(fruits);

// Trouver l'index d'un élément dans le tableau

fruits.push("Mango");
console.log(fruits);
//////////////////
let pos = fruits.indexOf("Banana");
console.log(pos);
console.log(fruits);

// Supprimer un élément par son index
let removedItem = fruits.splice(pos, 1);
console.log(removedItem);

// Supprimer des éléments à partir d'un index
let vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos1 = 1,
  n = 2;

let removedItems = vegetables.splice(pos, n);
// n définit le nombre d'éléments à supprimer,
// à partir de la position pos

console.log(vegetables);
// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItems);
