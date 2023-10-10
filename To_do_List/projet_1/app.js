// Create a "close" button and append it to each list item
// Crée un bouton "fermer" et l'ajoute à chaque élément de la liste
// var myNodelist = document.getElementsByTagName('LI');
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement('SPAN');
//   var txt = document.createTextNode('\u00D7');
//   span.className = 'close';
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// Click on a close button to hide the current list item
// Cliquez sur un bouton de fermeture pour masquer l'élément de liste actuel
// var close = document.getElementsByClassName('close');
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     var div = this.parentElement;
//     div.style.display = 'none';
//   };
// }

// Add a "checked" symbol when clicking on a list item
// Ajout d'un symbole "coché" lorsque l'on clique sur un élément de la liste
// var list = document.querySelector('ul');
// list.addEventListener(
//   'click',
//   function (ev) {
//     if (ev.target.tagName === 'LI') {
//       ev.target.classList.toggle('checked');
//     }
//   },
//   false
// );

// Create a new list item when clicking on the "Add" button
// Crée un nouvel élément de liste en cliquant sur le bouton "Ajouter"
function newElement() {
  var inputValue = document.getElementById('myInput').value;
  var li = document.createElement('li');
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  //-------------------------------
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    document.getElementById('myUL').appendChild(li);
  }
  // document.getElementById('myUL').appendChild(li);
  // document.getElementById('myInput').value = '';

  // var txt = document.createTextNode('\u00D7');
  // var span = document.createElement('SPAN');
  // span.className = 'close';
  // span.appendChild(txt);
  // li.appendChild(span);

  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function () {
  //     var div = this.parentElement;
  //     div.style.display = 'none';
  //   };
  // }
}
