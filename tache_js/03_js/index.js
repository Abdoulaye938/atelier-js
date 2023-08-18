//Exercice tache 3

const age = prompt('Entrez votre age :');
if (age <= 15) {
  alert('vous etes un enfant');
} else if (age <= 25) {
  alert('vous etes un adolescent');
} else if (age <= 65) {
  alert('vous etes Adultes');
} else if (age >= 65) {
  alert('vous etes aine ');
} else {
  alert('vous etes vieux');
}
