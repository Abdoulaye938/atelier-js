// let languesAll = [
//   'laravel',
//   'python',
//   'javaScript',
//   'php',
//   'nodeJs',
//   'angular',
// ];

// let langues = document.querySelector('#language');

// // let fragment = document.createDocumentFragment();
// let fragment = new DocumentFragment();

// languesAll.forEach((lange) => {
//   let li = document.createElement('li');
//   li.textContent = lange;
//   fragment.appendChild(li);
// });
// langues.appendChild(fragment);

const paysAll = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
];
// Tout d’abord,
// sélectionnez l’ <ul> élément par son identifiant à l’aide de la querySelector()méthode.
let paysId = document.getElementById('pays');
// Deuxièmement,
//créez un nouveau fragment de document.
let fragment = new DocumentFragment();
// parcourir le tableau boucle forEach
paysAll.forEach((pays) => {
  /**
   * Troisièmement,
   * pour chaque élément du languagestableau,
   * créez un élément d'élément de liste,
   * attribuez les éléments de liste innerHTMLau language et
   * ajoutez tous les éléments de liste nouvellement créés au fragment de document.
   */
  let li = document.createElement('li');
  li.textContent = pays;
  fragment.appendChild(li);
});
paysId.appendChild(fragment);
