// // boucle for in et for of

// const myArr = ['Laye', 'Moussa', 'Samba', 'Demba'];

// for (let prenom of myArr) {
//   console.log(`Bonjouur a toi ${prenom}`);
// }
// //////////////////////////////////////////////////////
// const num = [10, 20, 30];

// for (let number of num) {
//   number += 100;
//   console.log(number);
// }
// //////////////////////////////////////////////////////////

// const str = 'xyz';
// for (let char of str) {
//   console.log(char.toUpperCase().repeat(100));
// }

//-------------------for loop----------------------------

// var i, j, k, l;
// for (i = 1; i <= 20; i++) {
//   for (k = 1; k <= 6 - 1; k++) {
//     document.write('&nbsp');
//   }
//   for (j = 1; j <= i; j++) {
//     document.write('* ');
//   }
//   document.write('<br>');
// }
//-------------------for ---------------------------
// var str = '';
// for (let i = 0; i < 9; i++) {
//   str = str + i;
// }
// console.log(str);

// var i = 0;
// for (; i < 9; i++) {
//   console.log(i);
// }

// for (var i = 0; ; i++) {
//   console.log(i);
//   if (i > 9) break;
// }

// var i = 0;
// for (;;) {
//   if (i > 9) break;
//   console.log(i);
//   i++;
// }

//---------------for in------------------
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// for (var prop in obj) {
//   console.log(`${prop} = ${obj[prop]}`);
// }

// const person = { fname: 'John', lname: 'Doe', age: 25 };

// let txt = '';
// for (let x in person) {
//   txt += person[x] + ' ';
// }
// // console.log(txt);
// document.getElementById('demo').innerHTML = txt;
