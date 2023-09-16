const tab1 = [-1, 2, -3, -4, 5, 6, -7, 8, 9, 10];
let affiche = '';
//----------filter()---------------------
const tab3 = tab1.filter((val) => val > 0);
affiche = tab3;
console.log(tab3);
let afficahge = document.getElementById('text');
afficahge.innerHTML = `${affiche}`;

//-------------Map()------------------

const tab2 = [1, 2, -3, -4, 5, 6, -7, 8, -9, -10];
let result = '';
let resultat = tab2.map((el) => el * 0);
result = resultat;
console.log(resultat);
let afficheResultat = document.getElementById('result');
afficheResultat.innerHTML = `${result}`;
