let note_maths = 11;
let note_francais = 9;
let note_hg = 16;
let moyenne = parseInt((note_maths + note_hg + note_francais) / 3);
// alert('La moyenne est de ' + moyenne);
let affichage = document.getElementById('moyenne');
affichage.innerHTML = `${moyenne}`;
