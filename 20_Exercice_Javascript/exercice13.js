let nombre = '';
let i = 0;
while (i <= 20) {
  //   const result = nombre + 2;
  nombre = nombre + i + '</br>';
  i = i + 2;
  //   console.log(nombre);
}
let affichage = document.getElementById('affiche');
affichage.innerHTML = `${nombre}`;
// affichage.innerHTML = nombre;
