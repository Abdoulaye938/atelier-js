// json

async function fetchUsers() {
  const r = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-Type': 'application/json',
    },
    body: JSON.stringify({ title: 'Titre mon premier arcticle' }),
  });
  console.log(r.headers.get('content-Type'));
  if (r.ok === true) {
    return r.json();
  }
  throw new Error('impossible de contacter le serveur');
}
fetchUsers().then((users) => console.log(users));

// async function fetchUsers() {
//   const r = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5');
// }
// fetchUsers().then((users) => console.log(users));
