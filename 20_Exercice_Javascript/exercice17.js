let aleatoireNumber = '<ul>';
let aleaNumber = 10;
for (let i = 0; i < aleaNumber; i++) {
  let tmp = Math.floor(Math.random() * 11);
  if (tmp == 10) {
    console.log('Le nombre 10 fait parti du tirage.');
  }
  aleatoireNumber = aleatoireNumber + '<li>' + tmp + '</li>';
}
aleatoireNumber = aleatoireNumber + '</ul>';
let affichage = document.getElementById('number');
affichage.innerHTML = `${aleatoireNumber}`;
