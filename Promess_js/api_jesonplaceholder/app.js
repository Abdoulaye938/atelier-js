// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const btn3 = document.getElementById('btn3');
// const ulElement = document.querySelector('.table');
//---------------AllApi-------------------
// btn3.addEventListener('click', function () {
//   const tab = [];
//   fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => {
//       return response.json();
//     })
//     .then((todos) => {
//       //   tab = todos;
//       // const todo1 = tab.filter((Element) => Element.completed == true);
//       //   console.log(todo1);
//       for (const todo1 of todos) {
//         const liElement = document.createElement('li');
//         liElement.innerText = JSON.stringify(todo1, null, 2);
//         ulElement.appendChild(liElement);
//       }
//     });
// });

//----------------------true--------------------------

// btn1.addEventListener('click', function () {
//   let todos = [];
//   //   const ulElement = document.querySelector('.table');
//   fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => response.json())
//     .then((newRes) => {
//       todos = newRes;
//       //   console.log(todos[1]);
//       const todo1 = newRes.filter((Element) => Element.completed == true);
//       const liElement = document.createElement('li');
//       liElement.innerText = JSON.stringify(todo1, null, 2);
//       ulElement.appendChild(liElement);
//     });
// });

//--------------------------------false---------------------
const btn2 = document.getElementById('btn2');
// const btn3 = document.getElementById('btn3');
// const ulElement = document.querySelector('.table');
let userId = document.getElementById('userId');
let id = document.getElementById('id');
let title = document.getElementById('title');
let completed = document.getElementById('completed');
btn2.addEventListener('click', function () {
  let todos = [];
  //   const ulElement = document.querySelector('.table');
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((newRes) => {
      todos = newRes;
      const todo1 = newRes.filter((Element) => Element.completed == false);
      for (let i of todo1) {
        console.log(todo1[1]);
        const list = document.querySelector('.table');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${i.userId}</td>
        <td>${i.id}</td>
        <td>${i.title}</td>
        <td>${i.completed}</td>
        <td>
        
        `;
        list.appendChild(row);
      }
    });
});
