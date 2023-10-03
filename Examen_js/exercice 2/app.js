let myName = document.getElementById('myText');
let yourName = document.getElementById('yourText');
let text = '';
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
    const affichage = document.getElementById('copie');
    text = `${myName.value} + ${yourName.value}`;
    // text += `${myName.value}  ${yourName.value}<br>`;
    affichage.innerHTML = `${text}`;
  }
}
