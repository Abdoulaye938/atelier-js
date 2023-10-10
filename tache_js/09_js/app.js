//----------partie 1---------------------------------
// const tab1 = [0, 1, 2, 3, 4];
// const tab2 = [1, 2, 7, 8, 9];
// let affiche1 = '';
// let affiche2 = '';

// const tab3 = tab1.filter((valAll) => !tab2.includes(valAll));
// const tab4 = tab1.filter((valAll) => tab2.includes(valAll));

// //--------affiche1------------
// console.log('les nombres tab3 sont:');
// console.log(tab3);
// affiche1 = tab3;
// let affichage1 = document.getElementById('text1');
// affichage1.innerHTML = `les nombres triers sont :${affiche1}`;
// //-----------affiche2--------------
// console.log('les nombres tab4 sont:');
// console.log(tab4);
// affiche2 = tab4;
// let afficahge2 = document.getElementById('text2');
// afficahge2.innerHTML = `les nombres triers sont: ${affiche2}`;

//-------------------partie 2------------------------

// tab5[5].filter((val) => !tab5.includes(val));
function trieArray(value) {
  return value >= 0;
}
const tab5 = [5, 3, 87, 1, -4, -99, 0].filter(trieArray);
let affiche3 = '';
//------------Affichage-------------------------
console.log(trieArray.value);
affiche3 = tab5;
let afficahge3 = document.getElementById('text3');
afficahge3.innerHTML = `les nombres triers sont: ${affiche3}`;

//-----------Min Max-----------------------------
Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};
// const tab6 = [5, 3, 87, 1, -4, -99, 0].filter(trieArray);
const tab6 = [5, 3, 87, 1, -4, -99, 0];
console.log(`Max value is: ${tab6.max()}` + `\nMin value is: ${tab6.min()}`);
let affiche4 = '';
affiche3 = tab6;
let afficahge4 = document.getElementById('text4');
afficahge4.innerHTML = `Max value is: ${tab6.max()} <br> \nMin value est: ${tab6.min()}`;
