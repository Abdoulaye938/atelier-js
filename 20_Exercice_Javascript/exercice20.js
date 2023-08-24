let image = '';
let nalea = 12;
for (let i = 1; i <= nalea; i++) {
  image =
    image + '<img src="https://picsum.photos/350/350?random=' + i + '" />';
}
let affichage = document.getElementById('image');
affichage.innerHTML = `${image}`;
