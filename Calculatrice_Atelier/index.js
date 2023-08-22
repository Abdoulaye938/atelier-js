// const touche1 = [...document.querySelectorAll('.bouton')];
// const touche2 = [...document.querySelectorAll('.bouton')];
// const ecran = document.querySelector('.ecran');

// // console.log(touche1);
// // console.log(touche2);
// const listeKeycode1 = touche1.map((touche1) => touche1.dataset.key);
// const listeKeycode2 = touche2.map((touche2) => touche2.dataset.key);
// // console.log(listeKeycode1);
// // console.log(listeKeycode2);
// document.addEventListener('keydown', (e) => {
//   const valeur = e.keyCode.toString;
//   calculer(valeur);
//   //   console.log(valeur, typeof valeur);
// });

// document.addEventListener('click', (e) => {
//   const valeur = e.target.dataset.key;
//   calculer(valeur);
//   //   console.log(valeur, typeof valeur);
// });

// const calculer = (valeur) => {
//   if (listeKeycode2.includes(valeur)) {
//     console.log(listeKeycode1);
//     // switch (valeur) {
//     //   case '8':
//     //     ecran.textContent = '0';
//     //     break;
//     //   case '9':
//     //     ecran.textContent = '';
//     //     break;
//     //   case '186':
//     //     const calcul = eval(ecran.textContent);
//     //     ecran.textContent = calcul;
//     //     break;
//     //   default:
//     //     const indexKeycode1 = listeKeycode1.indexOf(valeur);
//     //     const indexKeycode2 = listeKeycode2.indexOf(valeur);
//     //     const touche1 = touche1[indexKeycode1];
//     //     const touche2 = touche2[indexKeycode2];
//     //     ecran.textContent += touche1.innerHTML;
//     //     ecran.textContent += touche2.innerHTML;
//     // }
//   }
// };

const buttons = document.querySelectorAll('.bouton');
const ecran = document.querySelector('.ecran');
// console.log([buttons]);

buttons.forEach(function (button) {
  button.addEventListener('click', () => {
    let valeur = button.textContent;
    if (valeur === 'C') {
      ecran.innerHTML = '';
    } else if (valeur === 'CE') {
      ecran.innerText = '0';
    } else {
      ecran.innerHTML += valeur;
    }
  });
});

function calcul() {
  ecran.innerHTML = eval(ecran.innerHTML);
}

//------------------------
// function septs(nombre) {
//   ecran.innerHTML += nombre;
// }
