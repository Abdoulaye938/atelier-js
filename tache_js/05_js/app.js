const mois = ['janvier', 'fevrier', 'mars', 'mai', 'juin', 'juillet'];

console.log(mois.length);

//----supprimer le dernier element du tableau
let last = mois.pop();

// console.log(mois.length);
// document.write(mois);

//-----ajouter la valeur 'aout' a la fin du tableau

let ajoutDernier = mois.push('aout');
// document.write(mois);

//----remplacer la valeur 'fevier' par 'fevrier'
mois.splice(1, 1, 'febrary');
document.write(mois);
