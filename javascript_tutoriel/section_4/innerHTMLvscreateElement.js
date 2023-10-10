//----------#1) createElement est plus performant
// let div1 = document.querySelector('.container1');

// let p = document.createElement('p');
// p.textContent = 'JS DOM 1';
// div1.appendChild(p);

// let div2 = document.querySelector('.container2');
// div2.innerHTML = '<p>JS DOM 2</p>';

// let div3 = document.querySelector('.container3');
// div3.innerHTML = '<p class="note">JS DOM 3</p>';

// console.log(div1.innerHTML);
// console.log(div2.innerHTML);
// console.log(div3.innerHTML);
// console.log(p.innerHTML);

//-------------#2) createElement est plus sécurisé---
//-------------#3) Utilisation de DocumentFragment pour composer des nœuds DOM------

// let div = document.querySelector('.container');

// for (let i = 0; i < 1000; i++) {
//   let p = document.createElement('p');
//   p.textContent = `Paragraph ${i}`;
//   div.appendChild(p);
// }
// console.log(div.innerHTML);

let div = document.querySelector('.container');
// compose les nœuds DOM
let fragment = document.createDocumentFragment();

for (let i = 0; i < 200; i++) {
  let p = document.createElement('p');
  p.textContent = `kadidiatou sylla  ${i} `;
  fragment.appendChild(p);
}

// ajoute le fragment à l'arborescence DOM
div.appendChild(fragment);
console.log(div.innerHTML);
