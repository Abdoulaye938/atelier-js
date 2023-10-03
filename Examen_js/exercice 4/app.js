let myName = document.getElementById('myText');
let yourName = document.getElementById('yourText');
let text = '';
let affiche1 = '';
let affiche2 = '';
let i = 0;
const btn = document.querySelector('#myButton');

function validate() {
  const inputs = document.querySelectorAll('input');
  let valide = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
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
    const affichage1 = document.getElementById('copie1');
    const affichage2 = document.getElementById('copie1');
    // text = `${myName.value} + ${yourName.value}`;
    // text += `${myName.value}  ${yourName.value}<br>`;
    // affichage.innerHTML = `${text}`;
    do {
      i = i + 1;
      const result = i * multiplication;
      affiche1 += `${multiplication} * ${i} = ${result} <br>`;
      affiche2 += `${multiplication} * ${i} = ${result} <br>`;
    } while (i <= 10);
    const affichage1 = document.getElementById('multiplication');
    affichage.innerHTML += `<br>${affiche1}`;
    const affichage2 = document.getElementById('multiplication');
    affichage.innerHTML += `<br>${affiche2}`;
  }
}
