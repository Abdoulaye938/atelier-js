// function clickFunc(event) {
//   console.log(event);
// }

const button = document.querySelector('#button');

button.addEventListener('click', function (event) {
  console.log(event.target.id);
  console.log(event.target.className);
  console.log(event.target.TageName);
});
