let prixht = prompt('Montant prixHT ?');
let taux_tva = prompt('Taux de prixTVA ?');
let prixttc = prixht * (taux_tva / 100) + 1;
if (prixttc > 100) {
  document.body.innerHTML = '<h1 style="color: red;">' + prixttc + '</h1>';
} else {
  document.body.innerHTML = '<h1 style="color: green;">' + prixttc + '</h1>';
}
