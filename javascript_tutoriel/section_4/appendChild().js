// récupère le menu ul#
const menu = document.querySelector('#menu');

function createMenuItem(name) {
  let li = document.createElement('li');
  li.textContent = name;
  return li;
}

// ajoute un élément de menu
menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us'));
