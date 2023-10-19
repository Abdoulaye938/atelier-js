// json

// async function fetchUsers() {
//   const r = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'content-Type': 'application/json',
//     },
//     body: JSON.stringify({ title: 'Titre mon premier arcticle' }),
//   });
//   console.log(r.headers.get('content-Type'));
//   if (r.ok === true) {
//     return r.json();
//   }
//   throw new Error('impossible de contacter le serveur');
// }
// fetchUsers().then((users) => console.log(users));

// async function fetchUsers() {
//   const r = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5');
// }
// fetchUsers().then((users) => console.log(users));

///-----------------------------------

//--------------------------------
//---------------------------------------
// async function fetchMovies() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   // waits until the request completes...
//   console.log(response);
// }
//-----------------------------------------
// async function fetchMoviesJSON() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const movies = await response.json();
//   return movies;
// }

// fetchMoviesJSON().then((movies) => {
//   movies;
// });

//--------------------------------------------------
let todos = [];
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((newRes) => {
    todos = newRes;
    console.log({ todos });
  });
//----------------------------------------------------
//-----------------------------------------------------
// async function fetchNew() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const movies = await response.json();
//   console.log({ movies });
//   return movies;
// }
// fetchNew().then((movies) => {
//   movies;
// });

//------------------------------------
async function fetchNew() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const movies = await response.json();
    console.log({ movies });
  } catch (error) {
    console.log({ error });
  }
}
fetchNew();
