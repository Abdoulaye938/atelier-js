//------1) Utilisation de la méthode append() pour ajouter un exemple d'élément--
let app = document.querySelector('#app');
let langs = ['java', 'TypeScript', 'HTML', 'CSS', 'javascript'];
// let fragment = new DocumentFragment();

let nodes = langs.map((lang) => {
  let li = document.createElement('li');
  li.textContent = lang;
  return li;
  //   fragment.appendChild(li);
});

app.append(...[...nodes]);
// app.appendChild(fragment);
