const allUsers = [];
document.querySelector('#student-form').addEventListener('submit', (e) => {
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

  let tbody = document.getElementById('student-list');
  let tr = document.createElement('tr');
  tr.innerHTML = `
                <td>${newUser.prenom}</td>
                <td>${newUser.nom}</td>
                <td>${newUser.email}</td>
                <td>${newUser.telephone}</td>
                <button type="button" class="btn btn-warning">Modifier</button>
                <button type="button" class="btn btn-danger">Supprimer</button>
                `;

  tbody.append(tr);
});
console.log(allUsers);
