let lignes = prompt('Nombre de lignes:');
let colonnes = prompt('Nombre de colonnes:');
let tableau = '<table>';

for (let i = 1; i <= lignes; i++) {
  for (let k = 1; k <= colonnes; k++) {
    tableau = tableau + '<td>laye</td>';
  }
  tableau = tableau + '</tr>';
}
let affichage = document.getElementById('tableau');
affichage.innerHTML = `${tableau}`;
