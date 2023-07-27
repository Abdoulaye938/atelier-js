// //------------------1 fois---------------------------------
// // var langagePro = [];

// // while (true) {
// //   var promptText = prompt("Entrez un langage de programmation");
// //   if (promptText != "") {
// //     langagePro.push(promptText);
// //   } else {
// //     break;
// //   }
// // }
// // console.log(langagePro);
// //------------------------2 fois------------------------------------
// // var LangagesPro = [];

// // while (true) {
// //   var prompText = prompt("Entre une langage de programmation :");
// //   if (prompText != "") {
// //     LangagesPro.push(prompText);
// //   } else {
// //     break;
// //   }
// // }
// // console.log(LangagesPro);

// //----------------------3 fois ----------------------------

// // var LangagesPro = [];
// // while (true) {
// //   var prompText = prompt("Entrer une langage de programmation");
// //   if (prompText != "") {
// //     LangagesPro.push(prompText);
// //   } else {
// //     break;
// //   }
// // }
// // console.log(LangagesPro);

// //--------------------4 fois ------------------------------------

// // var programmation = [];

// // while (true) {
// //   var prompText = prompt("Entrer une langage de programmation");
// //   if (prompText != "") {
// //     programmation.push(prompText);
// //   } else {
// //     break;
// //   }
// // }
// // console.log(programmation);

// //--------------------5 fois --------------------------------------

// // var langPro = [];

// // while (true) {
// //   var prompText = prompt("Ecrit une langage de programmation");
// //   if (prompText != "") {
// //     langPro.push(prompText);
// //   } else {
// //     break;
// //   }
// // }
// // console.log(langPro);

// //--------------------------6 fois -------------------------------

// //
// //------------------------------------partie 2 --------------------------------
// // var LangagesPro = ["c++", "python", "java", "Ruby"];

// // var prompText = prompt("Entrez le nom d'un langage de programmation");
// // if (LangagesPro.indexOf(prompText) != 1) {
// //   alert("Ton langage existe !");
// // } else {
// //   alert("Ton langage n'existe pas :'(");
// // }

// const paragraph =
//   "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// const searchTerm = "dog";
// const indexOfFirst = paragraph.indexOf(searchTerm);

// console.log(
//   `The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`
// );
// // Expected output: "The index of the first "dog" from the beginning is 40"

// console.log(
//   `The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(
//     searchTerm,
//     indexOfFirst + 1
//   )}`
// );
// // Expected output: "The index of the 2nd "dog" is 52"

//--------------------------27/07/2023-----------------------------------------
// condition et boucle
// for in et for of

const myArr = ['Laye', 'Moussa', 'Samba', 'Demba'];

for (let prenom of myArr) {
  console.log(`Bonjouur a toi ${prenom}`);
}
