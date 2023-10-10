// const allUsers = [];
// document.querySelector('#student-form').addEventListener('submit', (e) => {
//   //recuperation des elements
//   const firstname = document.querySelector('#firstname').value;
//   const lastname = document.querySelector('#lastname').value;
//   const email = document.querySelector('#email').value;
//   const number = document.querySelector('#number').value;

//   const newUser = {
//     prenom: firstname,
//     nom: lastname,
//     email: email,
//     telephone: number,
//   };
//   allUsers.push(newUser);

//   //afficher les donnees sur le tableau
//   let tbody = document.getElementById('student-list');
//   let tr = document.createElement('tr');
//   tr.innerHTML = `
//                   <td>${newUser.prenom}</td>
//                   <td>${newUser.nom}</td>
//                   <td>${newUser.email}</td>
//                   <td>${newUser.telephone}</td>
//                   <button href="#" class="btn btn-warning btn-sm edit">Modifier</button>
//                   <button href="#" class="btn btn-danger btn-sm delete">Supprimer</button>
//                   `;

//   tbody.append(tr);
// });
// console.log(allUsers);

// // Suprimmer les données

// // modifier les donnees

const allUsers = [];

document.querySelector('#student-form').addEventListener('submit', (e) => {
  //recuperation des elements
  const firstname = document.querySelector('#firstname').value;
  const lastname = document.querySelector('#lastname').value;
  const email = document.querySelector('#email').value;
  const number = document.querySelector('#number').value;

  const newUser = {
    prenom: firstname,
    nom: lastname,
    email: email,
    telephone: number,
  };
  allUsers.push(newUser);

  //affiche donnee
  let tbody = document.getElementById('student-list');
  let tr = Document.createElement('tr');
  tr.innerHTML = `
              <td>${newUser.prenom}</td>,
                  `;
  tbody.oppend(tr);
});
console.log(allUsers);
