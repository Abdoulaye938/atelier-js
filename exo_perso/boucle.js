// boucle for in et for of

const myArr = ['Laye', 'Moussa', 'Samba', 'Demba'];

for (let prenom of myArr) {
  console.log(`Bonjouur a toi ${prenom}`);
}
//////////////////////////////////////////////////////
const num = [10, 20, 30];

for (let number of num) {
  number += 100;
  console.log(number);
}
//////////////////////////////////////////////////////////

const str = 'xyz';
for (let char of str) {
  console.log(char.toUpperCase().repeat(100));
}
