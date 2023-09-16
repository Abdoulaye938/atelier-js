//var myName = window.prompt('quel est votre nom ?');
//console.log('hello', myName);

let myName = document.getElementById('myText');
let yourName = document.getElementById('yourText');
let text = '';

// document.getElementById('myButton').onclick = function () {
//   let myName = document.getElementById('myText').value;
//   let yourName = document.getElementById('yourText').value;
//   let text = '';
//   // const inputs = document.querySelectorAll('input');
//   // const parent = erreur.parentElement;
//   // if (element.value == '') {
//   //   erreur.style.borderColor = 'red';
//   //   parent.querySelector('small').innerText = 'remplir ce champ';
//   // }
//   // const affichage = document.getElementById('copie');
//   // text = `Bonjour, ${myName}  ${yourName}`;
//   // affichage.innerHTML = `${text}`;
//   // console.log('Bonjour', myName + ' ' + yourName);
// };

const btn = document.querySelector('#myButton');

function validate() {
  const inputs = document.querySelectorAll('input');
  let valide = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    // if (!i.value) {
    //   i.style.borderColor = 'red';
    //   parent.querySelector('small').innerText = 'remplir ce champ';
    //   valide = false;
    // } else if (yourName.value == '') {
    //   yourName.style.borderColor = 'red';
    //   // yourName.parentElement.querySelector('small').innerText =
    //   // 'champ nom vide';
    //   valide = false;
    // } else if (myName.value == '') {
    //   myName.style.borderColor = 'red';
    //   // myName.parentElement.querySelector('small').innerText =
    //   // 'champ prenom vide';
    //   valide = false;
    // } else {
    //   i.style.borderColor = 'black';
    //   parent.querySelector('small').innerText = '';
    //   valide = true;
    // }
    if (!i.value) {
      i.style.borderColor = 'red';
      parent.querySelector('small').innerText = 'remplir ce champ';
      valide = false;
    }
  });
  return valide;
}
function affichage() {
  if (validate()) {
    const affichage = document.getElementById('copie');
    text += `Bonjour, ${myName.value}  ${yourName.value}<br>`;
    affichage.innerHTML = `${text}`;
  }
}
