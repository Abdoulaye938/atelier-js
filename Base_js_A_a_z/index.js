// // On declare et on initialise la variable en meme temps
// let prenomNom = "Abdoualaye DIALLO";

// // on declare la variable puis on l'initialise ensuite\
// let monPrenom;
// monPrenom = "Abdoulaye";

// prenomNom = "Ablaye DIALLO";

// ///////////////////////////////

// // ce ci fonctionne
// // var nomPrenom = "DIALLO Abdoulaye";
// // var nomPrenom = "NDIAYE Mbaye ";

// // // ceci ne fonctionne pas et renvoie une erreur
// // let nomPreNom = "DIALLO Abdoulaye";
// // let nomPreNom = "NDIAYE Mbaye ";

// // console.log("hello");

// // ------- variable ----------

// // let maVariable = "KamelCase";
// // console.log(maVariable);

// // -----------------

// // var untext = "voici un text";

// // console.log(untext);

// // untext = "nouveau text";

// // console.log(untext);

// // const prenom = "Abdoulaye";
// // console.log(prenom);

// // let unchiffre = 24;
// // unchiffre = 12;
// // console.log(unchiffre);

// // --------------- Concatenation -------------------

// let chiffre = 24;
// let nouvelleChaine = "le chiffre attendu est:" + chiffre;
// console.log(nouvelleChaine);
// ///////////////////////
// let nom = "DIALLO";
// let prenom = "Abdoulaye";
// let nomEntier = "le nom en entier est: " + prenom + " " + nom;
// console.log(nomEntier);

// // ----------------- Type de donnee-----------------------

// let string = "je suis une chaine";
// let number = 24;
// let boolean = true;
// let array = ["je", "suis", 24, false];
// let objet = {
//   prenom: "Abdoulaye",
//   age: 34,
//   ville: "Dakar",
// };
// console.log(typeof array);
// console.log(typeof string);
// console.log(typeof number);
// console.log(typeof boolean);
// console.log(typeof objet);

// // ------------ les operateurs  -------

// console.log(10 + 5);
// console.log(10 - 5);
// console.log(10 * 5);
// console.log(10 / 5);
// console.log(10 ** 5);

// // ------------ les operateurs d'affectation  -------
// let total0 = 0;
// total0 = total0 + 1;
// console.log(total);

// let total1 = 0;
// total1++;
// console.log(total1);

// let total2 = 0;
// total2--;
// console.log(total2);

// // let total = 10;
// // total *= 5;
// // console.log(total);

// // let total = 10;
// // total += 5;
// // console.log(total);

// // let total = 10;
// // total /= 5;
// // console.log(total);

// // let total = 10;
// // total **= 5;
// // console.log(total);

// let total4 = 10;
// let x1 = 4;
// total4 = ++x1;
// console.log(total4);

// let total5 = 10;
// let x2 = 9;
// x2++;
// total5 = x2;
// console.log(total5);

// let total6 = 10;
// let x3 = 9;
// ++x3;
// total6 = x3;
// console.log(total6);

// // -------------- structure de controle ---------------
// let x = 9;
// let y = 5;
// if (x < y) {
//   console.log("x est inferieur a y ");
// } else {
//   console.log("y est inferieur a x ");
// }
// ////////////////////////////
// let ageAbdoulaye = "30 ans";
// let ageMbaye = "24 ans";
// if (ageMbaye < ageAbdoulaye) {
//   console.log(" Abdoulaye est plus age que Mbaye");
// } else {
//   console.log(" Mbaye est plus age que Abdoulaye");
// }

// // let x = 5;
// // let y = 6;
// // if (x === y) {
// //   console.log("True !");
// // } else {
// //   console.log("False !");
// // }

// // let x = 5;
// // let y = "6";
// // if (!x) {
// //   console.log(" x existe ");
// // } else {
// //   console.log(" x n'existe pas");
// // }

// // let x = 5;
// // let y = "6";
// // if (x === y || x < 3) {
// //   console.log("True !");
// // } else {
// //   console.log("False !");
// // }

// // let x = 5;
// // let y = "6";
// // if (x === y && x > 3) {
// //   console.log("True !");
// // } else {
// //   console.log("False !");
// // }

// // let x = 4;
// // let y = "5";
// // if (x === y) {
// //   console.log("True !");
// // } else if (x == y) {
// //   console.log("x et y egaux en valeur ");
// // } else {
// //   console.log("x et y ne sont pas egaux en valeur ");
// // }

// // let x = 4;
// // let y = "5";
// // if (x === y) {
// //   console.log("True !");
// // } else if (x == y) {
// //   console.log("x et y egaux en valeur ");
// // } else {
// //   console.log(x + " et " + y + " ne sont pas egaux en valeur ");
// // }

// // let x = 5;
// // let y = "5";
// // x === y ? console.log("True !") : console.log("False !");

// // --------------- les fonctions ------------------------------------

function faireQuequelChose() {
  console.log("je fais un truc !");
  console.log("trop coole");
}
faireQuequelChose();

function faireQuequelChose() {
  console.log("je fais un truc !");
  console.log("trop coole");
}

const faireUneTache = (tache) => {
  console.log("je fais : " + tache);
};
faireUneTache("les coures");
faireUneTache("je fais le menage");

function calc(x, y) {
  return x + y;
}
(function () {
  console.log("Je me joue toute seule");
})();

(() => {
  console.log("Je me joue aussi toute seule");
})();

// la portee d'une variable
let a = 9;
function faireQuequelChose() {
  console.log("je fais un truc !");
  console.log("trop coole");
}

const faireUneTache1 = (tache) => {
  console.log("je fais : " + tache);
};
function add2() {
  return a + 2;
}
