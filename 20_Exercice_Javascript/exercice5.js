let prixht = prompt('Montant HT ?');
let taux_tva = prompt('Taux de TVA ?');
let taux_tva_calcul = taux_tva / 100 + 1;
let prixttc = prixht * taux_tva_calcul;
document.body.innerText = prixttc;
