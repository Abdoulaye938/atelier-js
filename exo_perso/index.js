//------------------1 fois---------------------------------
// var langagePro = [];

// while (true) {
//   var promptText = prompt("Entrez un langage de programmation");
//   if (promptText != "") {
//     langagePro.push(promptText);
//   } else {
//     break;
//   }
// }
// console.log(langagePro);
//------------------------2 fois------------------------------------
// var LangagesPro = [];

// while (true) {
//   var prompText = prompt("Entre une langage de programmation :");
//   if (prompText != "") {
//     LangagesPro.push(prompText);
//   } else {
//     break;
//   }
// }
// console.log(LangagesPro);

//----------------------3 fois ----------------------------

// var LangagesPro = [];
// while (true) {
//   var prompText = prompt("Entrer une langage de programmation");
//   if (prompText != "") {
//     LangagesPro.push(prompText);
//   } else {
//     break;
//   }
// }
// console.log(LangagesPro);

//--------------------4 fois ------------------------------------

// var programmation = [];

// while (true) {
//   var prompText = prompt("Entrer une langage de programmation");
//   if (prompText != "") {
//     programmation.push(prompText);
//   } else {
//     break;
//   }
// }
// console.log(programmation);

//--------------------5 fois --------------------------------------

// var langPro = [];

// while (true) {
//   var prompText = prompt("Ecrit une langage de programmation");
//   if (prompText != "") {
//     langPro.push(prompText);
//   } else {
//     break;
//   }
// }
// console.log(langPro);

//--------------------------6 fois -------------------------------

//
//------------------------------------partie 2 --------------------------------
var LangagesPro = ["c++", "python", "java", "Ruby"];

var prompText = prompt("Entrez le nom d'un langage de programmation");
if (LangagesPro.indexOf(prompText) != 1) {
  alert("Ton langage existe !");
} else {
  alert("Ton langage n'existe pas :'(");
}
