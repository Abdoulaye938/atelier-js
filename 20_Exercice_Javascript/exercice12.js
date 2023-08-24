let triangle = '';
for (let i = 1; i <= 7; i++) {
  for (let k = 1; k <= i; k++) {
    triangle = triangle + i;
  }
  triangle = triangle + '<br />';
}
let affichage = document.getElementById('triangle');
affichage.innerHTML = `${triangle}`;
