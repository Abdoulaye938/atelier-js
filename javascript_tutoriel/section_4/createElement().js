// 1) Création d'un nouvel exemple div

// crée un nouveau div et définit ses attributslet div = document.createElement('div');
let div = document.createElement('div');
div.id = 'content';
div.className = 'note';
div.innerHTML = '<h1> moi Abdoulaye @@@@@@@@@@@ </h1>';
document.body.appendChild(div);

// crée un nouveau nœud de texte et l'ajoute au div
let text = document.createTextNode('CreateElement example ######');
div.appendChild(text);

// crée un nouveau titre et l'ajoute au div
let h1 = document.createElement('h1');
h1.textContent = 'Ajouter un élément h2 au div';
div.appendChild(h1);

// 2) liExemple de création de nouveaux éléments de liste ( )
let li = document.createElement('li');
li.textContent = 'Product';

li = document.createElement('li');
li.textContent = 'About Us';

// sélectionne l'élément de menu ul
const menu = document.querySelector('#menu');
console.log(menu);
menu.appendChild(li);
