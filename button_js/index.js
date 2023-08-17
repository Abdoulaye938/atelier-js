// buttons
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');

// borders
const bord1 = document.querySelector('.border1');
const bord2 = document.querySelector('.border2');

// Les evenmenets
btn1.addEventListener('click', () => {
  bord1.classList.toggle('my-classe1');
});

btn2.addEventListener('click', () => {
  bord2.classList.toggle('my-classe2');
});
