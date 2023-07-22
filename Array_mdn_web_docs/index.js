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
