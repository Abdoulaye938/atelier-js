let aleaNumber = '<ul>';
let nalea = 10;
let nalea10 = 0;
for (let i = 0; i < nalea; i++) {
  let tmp = Math.floor(Math.random() * 11);
  if (tmp == 10) {
    nalea10++;
  }
  aleaNumber = aleaNumber + '<li>' + tmp + '</li>';
}
aleaNumber = aleaNumber + '</ul>';
aleaNumber = aleaNumber + '<p>Il y a eu ' + nalea10 + ' tirages de 10.</p>';
let affichage = document.getElementById('number');
affichage.innerHTML = `${aleaNumber}`;
