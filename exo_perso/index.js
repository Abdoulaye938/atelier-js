//
// let x = '5';
// let y = 5;
// if (x === y) {
//   alert("c'est vrai");
// } else {
//   alert("c'est faux");
// }
/*
let x = -10;

if (x > 1) {
  alert('x contient une valeur strictement supérieure à 1');
} else if (x == 1) {
  alert('x contient une valeur de 1');
} else if (x < 1) {
  alert('x contient une valeur strictement inferieur a 1');
} else if (x < 0) {
  alert('x contient une valeur strictement inferieur a 0');
} else {
  alert('x est negatif');
}
*/

// } else if (x == 1) {
//   alert('x contient la valeur 1');
// } else {
//   alert('x contient une valeur strictement inférieure à 1');
// }

// let i = 0;
// while (i < 10) {
//   console.log('BONJOUR' + i);
//   i = i + 1;
// }
/*
const notes = [12, 13, 15, 19];
for (let i = 0; i < notes.length; i++) {
  console.log(notes[i]);
  console.log(i);
}*/

//
// function quantité(selectObject) {
//   let qtéSélectionnée = 0;
//   for (let i = 0; i < selectObject.options.length; i++) {
//     if (selectObject.options[i].selected) {
//       qtéSélectionnée++;
//     }
//   }
//   return qtéSélectionnée;
// }

// let btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//   alert(
//     "Nombre d'options choisies : " + quantité(document.selectForm.typesMusique)
//   );
// });

// let btns = document.getElementsByClassName('btn');
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function () {
//     let buttonStyle = getComputedStyle(this);
//     let buttonBgColor = buttonStyle['backgroundColor'];
//     document.body.style.backgroundColor = buttonBgColor;
//   });
// }

// JavaScript peut modifier le contenu HTML
let para = document.getElementById('para');
// alert(para.innerHTML);
// para.innerHTML = 'Bonjour coach je suis Bakeliste en programmation';

// JavaScript peut modifier les styles HTML (CSS)
// para.style.color = 'red';
// para.style.backgroundColor = 'yellow';
para.style.backgroundColor = prompt('Entrez une couleur');
console.log(para.style.color);
console.log(para.style.backgroundColor);
