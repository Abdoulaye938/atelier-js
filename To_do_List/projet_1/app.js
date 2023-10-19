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
// function newElement() {
//   var inputValue = document.getElementById('myInput').value;
//   var li = document.createElement('li');
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   //-------------------------------
//   if (inputValue === '') {
//     alert('You must write something!');
//   } else {
//     document.getElementById('myUL').appendChild(li);
//   }
//   // document.getElementById('myUL').appendChild(li);
//   document.getElementById('myInput').value = '';

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

// ajout des boutons
// }

const addBtn = document.getElementById('addBtn');
const myUL = document.getElementById('myUL');
const myInput = document.getElementById('myInput');

// Event Listener for Add Button

addBtn.addEventListener('click', function () {
  if (myInput.value.trim() === '') {
    alert('You must write something!');
  } else {
    let btnGroup = document.createElement('div');
    // btnGroup.classList.add('mydiv');
    btnGroup.innerHTML += `
                        <div class="mydiv">
                         <p>${myInput.value}</p>
                         <div>
                         <button class="btn1" > To Do </button>
                         <button class="btn2" > Doing </button>
                         <button class="btn3" > Done </button>
                         <button class="btn4" > Supprimer </button>
                         </div>
                         </div>`;
    myUL.appendChild(btnGroup);
  }

  myInput.value = '';

  let btn1 = document.querySelector('.btn1');
  let btn2 = document.querySelector('.btn2');
  let btn3 = document.querySelector('.btn3');
  let btn4 = document.querySelector('.btn4');

  btn1.addEventListener('click', () => {
    myUL.style.backgroundColor = 'green';
  });
  btn2.addEventListener('click', () => {
    myUL.style.backgroundColor = 'yellow';
  });
  btn3.addEventListener('click', () => {
    myUL.style.backgroundColor = 'red';
  });
  btn4.addEventListener('click', () => {
    myUL.style.backgroundColor = 'gray';
  });
  // let toDo = document.createElement('button');
  // toDo.innerHTML = '<button class="btn1 task1" > To Do </button>';
  // toDo.classList.add('task1');
  // // div.appendChild(toDo);
  // liste.appendChild(toDo);

  // let doing = document.createElement('button');
  // doing.innerHTML = '<button class="btn2 task2">Doing</button><br>';
  // doing.classList.add('task2');
  // liste.appendChild(doing);

  // let done = document.createElement('button');
  // done.innerHTML = '<button class="btn3 task3">Done</button> <br>';
  // done.classList.add('task3');
  // liste.appendChild(done);

  // if (inputTask.value === '') {
  //   alert('Please Enter a Task');
  // } else {
  //   taskContainer.appendChild(task);
  // }

  // checkButton.addEventListener('click', function () {
  //   checkButton.parentElement.style.textDecoration = 'line-through';
  // });

  // deleteButton.addEventListener('click', function (e) {
  //   let target = e.target;

  //   target.parentElement.parentElement.remove();
  // });
});
