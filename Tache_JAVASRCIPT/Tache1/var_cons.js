// declaration de variable

let prenom = 'Laye';
let age = 22222222222222;
let enLigne = true;
let choix = null;
console.log(typeof prenom);
console.log(typeof age);
console.log(typeof enLigne);
console.log(typeof choix);
console.log(typeof ville);

// concatenation
console.log(prenom + ' ' + age + ' ' + 'ans');
console.log(`Je m'appelle ${prenom}, j'ai ${age} ans`);

// Echapper un caratere antislash
console.log('Il fait "beau aujourd\'hui"');

// Declaration et affectation d'une constante
const VILLE = 'Rouen';

// Array

let tab = ['Pommes', 30, true, ['bleu', 'rouge'], prenom];
console.log(tab);
// Grandeur du tableau
console.log(tab.lenght);
// index 1
console.log(tab[1]);
//Mot rouge
console.log(tab[3][1]);
// object
let personne = {
  prenom: 'Laye',
  age: 2222222222222222222222,
  adresse: {
    rue: '12 rue de la paix',
    ville: 'Dakar',
  },
};
console.log(personne.prenom);
console.log(personne['prenom']);
console.log(personne.adresse.rue);
