//------JavaScript Récupère l'élément parent parentNode

// let note = document.querySelector('.note');
// console.log(note.parentNode);

//----------Obtenir les éléments enfants d'un nœud en JavaScript
let content = document.getElementById('menu');
let firstChild = content.firstChild.nodeName;
console.log(firstChild);
