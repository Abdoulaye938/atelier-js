//--1) Exemple simple de JavaScript innerHTML

/**
Comment ça fonctionne:
Tout d’abord, sélectionnez l’ <ul>élément par son identifiant ( menu) à l’aide de la getElementById()méthode.
Ensuite, récupérez le contenu HTML de l' <ul>élément à l'aide du fichier innerHTML.
*/

// let menu = document.getElementById('menu');
// console.log(menu.innerHTML);

//--2) Examen de la source HTML actuelle
// let menu = document.getElementById('menu');

// let li = document.createElement('li');
// li.textContent = 'About Us ert';
// menu.appendChild(li);
// console.log(menu.innerHTML);

// const menu = document.querySelector('#menu');

// function createMenuItem(name) {
//   let li = document.createElement('li');
//   li.textContent = name;
//   return li;
// }

// // ajoute un élément de menu
// menu.appendChild(createMenuItem('Home'));
// menu.appendChild(createMenuItem('Services'));
// menu.appendChild(createMenuItem('About Us'));
// console.log(menu.innerHTML);

// const scriptHTML = `<script>alert("Alert from innerHTML");</script>`;
// const main = document.getElementById('main');

// main.innerHTML = scriptHTML;

const main = document.getElementById('main');

const externalHTML = `<img src='1' onerror='alert("Error loading image")'>`;
// shows the alert
main.innerHTML = externalHTML;
