//---------Methode MAP() JAVASCRIPT

// const tableau = [2, 4, 20, 30, 100];

// let resultat = tableau.map((el) => {
//   return el * el;
//   //   console.log(el);
// });
// let resultat1 = tableau.map((el) => el * el);
// let resultat2 = tableau.map((el) => 'coucou');
// let resultat3 = tableau.map((el) => 'le nombre est' + ' ' + el);

// console.log(resultat1);
// console.log(resultat2);
// console.log(resultat3);

//-------------Methode filter()---------------------

// let nombres = [5, 2, 10, 4, 7, , 6, 3, 8, 9, 1, 11, 12, 13];

// let filtermethode = nombres.filter((val) => val > 3);

// console.log(filtermethode);
//////////////////////////////////////////////////////////
// const votreAge = [
//   { name: 'laye', age: '20' },
//   { name: 'samba', age: '22' },
//   { name: 'aliou', age: '15' },
//   { name: 'saliou', age: '32' },
// ];

// const ageTableau = votreAge.filter((obj) => obj.age > 30);
// console.log(ageTableau);

// votreAge
//   .filter((obj) => obj.age > 30)
//   .forEach((person) => console.log(person.name, 'is above 30'));

//-----------------Methode reduce()-------------------------------------
//------------------methode 1-------------------------------------------
// const nombres = [5, 2, 12, 23, 6, 3, 8, 9, 1, 11, 12, 13];
// const accumul = nombres.reduce((acc, x) => {
//   return acc + x;
// });
// const accumul = nombres.reduce((acc, x) => acc + x);
// console.log(accumul);

/////////////////////////////////////////////////
//---------------methode 1--------------------------------
// const newTab = ['&', '$', '%', '&', '%', '^', '(', '@', '&', '$', '&'];
// const tabNew = newTab.reduce((acc, x, i) => {
//   acc[x] = ++acc[x] || 1;
//   console.log(`|${i}| value : ${x}`);
//   console.log(acc);
//   return acc;
// }, {});
//--------------methode 2-------------------------

// const newTab = ['&', '$', '%', '&', '%', '^', '(', '@', '&', '$', '&'];
// const tabNew = newTab.reduce((acc, x) => ({ ...acc, [x]: ++acc[x] || 1 }));
// console.log(tabNew);
//----------methode 3----------------

// const newTableau = [1, 2, 3, 4, 5, 6, 7, 8];

// const mapLike = (arr, fn) => arr.reduce((acc, x) => acc.concat(fn(x)), []);

// const tabNew = mapLike(newTableau, (x) => x + 1);

// console.log(tabNew);

//----------------------Methode sort() js------------------------
//--------------methode 1--------------------
// const tab = [2, 5, 56, 3, 578, 543, 234, 23, 579, 345];
// const newTab = function (a, b) {
//   // > 0
//   // = 0
//   // < 0
//   return a - b;
// };
//--sort()----
// tab.sort(newTab);
// console.log(tab);

// const tab = [2, 5, 110, 345, 0, 9, 56, 3, 578, 543, 234, 23, 579, 345];
// const tab1 = [2, 5, 110, 345, 0, 9, 56, 3, 578, 543, 234, 23, 579, 345];
// const tab2 = [2, 5, 110, 345, 0, 9, 56, 3, 578, 543, 234, 23, 579, 345];

// tab.sort((a, b) => a - b); // pour ordre croissant
// tab1.sort((a, b) => -a + b); // pour ordre decroissant
// tab2.sort((a, b) => (a % 2) - (b % 2)); // pour un modulo

// console.log(tab);
// console.log(tab1);
// console.log(tab2);

//--------------------foreach() js---------------

//-----------------------methode 1--------------------------
// const myTab = [12, 23, 34, 45, 89, 56, 90, 56];

// // myTab.forEach((item) => console.log(item));
// myTab.forEach((item) => console.log(item * item));

//-----------------methode 2---------------------------------------
const tableau = [
  { name: 'Ablaye', value: 1, number: '771234567' },
  { name: 'Abdou', value: 2, number: '773454567' },
  { name: 'Abou', value: 3, number: '770344567' },
  { name: 'Abdoulaye', value: 4, number: '773454567' },
  { name: 'Ablaye', value: 1, number: '771234567' },
  { name: 'Abdou', value: 2, number: '773454567' },
  { name: 'Abou', value: 3, number: '770344567' },
  { name: 'Abdoulaye', value: 4, number: '773454567' },
];

// tableau.forEach((item) => console.log(item.number));

tableau.forEach(function (tableau, index, array) {
  let li = document.createElement('li');
  li.classList.add('list-group-item');
  //   li.textContent = tableau.name + tableau.value + tableau.number;
  li.textContent = `${index + 1}/${array.length} - ${
    tableau.name
  }, il a la valeur ${tableau.value}, son telephone est ${tableau.number} `;
  document.querySelector('.list-group').appendChild(li);
});
