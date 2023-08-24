let prixHT = prompt('Entrez le prix TVA:');
let prixTTC = prixHT * 1.2;
document.body.innerText = `${prixTTC}`;
