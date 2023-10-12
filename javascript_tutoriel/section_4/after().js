// 1) Utiliser JavaScript after() pour insérer un nœud après un élément

//Tout d’abord,
//récupérez l’élément de titre en utilisant la querySelector()//
const h1 = document.querySelector('h1');

// Deuxièmement,
//créez un nouvel élément de paragraphe et
//définissez son innerText
// crée un nouvel élément de paragraphe
const p = document.createElement('p');
p.innerText = 'This is JavaScript DOM after() method demo';

// Troisièmement,
//insérez l' <p> élément après l' <h1> élément :
// insère le paragraphe après le titre
h1.after(p);

// 2) Utilisation de JavaScript after() pour insérer plusieurs nœuds après un élément
//---------1e methode-------------------------
const list = document.querySelector('#langPro');

let languageAll = ['python', 'java', 'php', 'js', 'nodeJs', 'diango'];

let fragment = new DocumentFragment();

languageAll.forEach((languePro) => {
  let li = document.createElement('li');
  li.innerHTML = languePro;
  fragment.appendChild(li);
});
list.appendChild(fragment);
p.after(list);

//----------2e methode ---------------------------------------------
// Tout d’abord,
// sélectionnez l’élément en utilisant la querySelector()méthode :
const listNew = document.querySelector('#jour');

// Deuxièmement,
// définissez un tableau de chaînes.
// En pratique, vous pouvez l'obtenir à partir d'un appel API.
let jours = ['mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

// Troisièmement,
// transformez le tableau de chaînes en un tableau d'éléments li en utilisant la map()méthode :
const listes = jours.map((jour) => {
  const li = document.createElement('li');
  li.innerText = jour;
  return li;
});
// Enfin,
//insérez les éléments de l'élément de liste après le dernier enfant de l'élément ul :
listNew.lastChild.after(...listes);

//-------3) Utilisation de JavaScript after() pour insérer des chaînes---

// let btn = document.getElementById('bouton');
const button = document.querySelector('#bouton');
const jour = document.getElementById('jour');
const langPro = document.getElementById('langPro');
const para = document.getElementById('para');
button.addEventListener('click', function () {
  var couleur = prompt('Entrez votre couleur');
  var color = prompt('Entrez un autre couleur');
  if (couleur) {
    document.body.style.backgroundColor = couleur;
    document.body.style.color = color;
    jour.style.display = 'none';
    langPro.style.display = 'none';
    para.style.display = 'none';
  }
  //   if (li === jour) {
  //     jour.style.display = 'none';
  //   } else if (text === langPro) {
  //     langPro.style.display = 'none';
  //   } else {
  //     alert('invalid');
  //   }
});

button.firstChild.after(' click me 🧡');
