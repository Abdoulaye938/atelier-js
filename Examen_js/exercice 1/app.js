const colors = ['green', 'orange', 'red', 'rgba(133, 122, 200)'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.background = colors[randomNumber];
  color.innerHTML = colors[randomNumber];
  console.log(randomNumber);
});
