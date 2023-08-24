let multiple = prompt('Entrez le nombre: ');
let affiche = '';
for (let i = 10; i <= 1000; i += 10) {
  const result = i * multiple;
  affiche += `${result} * ${i} = ${result} </br>`;
  //   console.log(result);
}
let affichage = document.getElementById('multiple');
affichage.innerHTML = `${affiche}`;
