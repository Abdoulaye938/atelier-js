//---------Methode MAP() JAVASCRIPT

const tableau = [2, 4, 20, 30, 100];

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
const votreAge = [
  { name: 'laye', age: '20' },
  { name: 'samba', age: '22' },
  { name: 'aliou', age: '15' },
  { name: 'saliou', age: '32' },
];

// const ageTableau = votreAge.filter((obj) => obj.age > 30);
// console.log(ageTableau);

votreAge
  .filter((obj) => obj.age > 30)
  .forEach((person) => console.log(person.name, 'is above 30'));
