const title = document.querySelector('h1');
const liens = document.querySelectorAll('a');

liens[0].addEventListener('click', function () {
  //   console.log(title.classList);
  title.classList.add('fbi');
});
liens[1].addEventListener('click', function () {
  //   console.log(title.classList);
  title.classList.remove('fbi', 'red');
});
liens[2].addEventListener('click', function () {
  //   console.log(title.classList);
  title.classList.toggle('fbi');
});
liens[3].addEventListener('click', function () {
  //   console.log(title.classList);
  title.classList.replace('fbi', 'red');
});
