// --------Déclarez des variables et modifiez leurs valeurs----
// Creer une variable en la declarant
let numberOfCats = 2;
let numberOfDogs = 2;

// exercice
let numberOfSeasons = 6;
let numberOfEpisodes = 12;

// modifier la valeur d'une variable
let numberOfCat = 3;
numberOfCat = 4;

// Opérateurs arithmétiques – travail sur des nombres
// Addition et soustraction

let total1 = 20;
let total2 = 10;
let total12 = total1 + total2;

let total4 = 20;
let total3 = 10;
let total34 = total4 + total3;

// ajouter ou soustraire ( +=, -=)
let pomme = 10;
// ===> 8
pomme -= 2;
// === 20
pomme += 12;

// increment ou decrement (++, --)

let orange = 10;
// ===> 11
orange++;
// ===> 10
orange--;

// multiplication et division

let garcon = 20;
let fille = 10;
let personne1 = garcon * fille;
let personne2 = garcon / fille;

// multiplier ou diviser

let groupe1 = 2;
// ===> 2*6=12
groupe1 *= 6;
//===> 12/3= 4
groupe1 /= 3;

// decouvrer les constantes
// const nombrePage = 20;
// nombrePage = 30;
// console.log(nombrePage);

// Enregistrez vos données avec des types de données
let integerCalculation = 1 + 2;
let weirdCalculation = 0.1 + 0.2;

// Appréhendez les valeurs logiques
let userIsSignedIn = true;
let userIsAdmin = false;

// Découvrez les chaînes de caractères
let firstName = "Will";
let lastName = "Alexander";

let wholeName = firstName + " " + lastName; // valeur: "Will Alexander"

// la string interpolation :${myName}
const myName = `Alexander`;
const salutation = `Bienvenue sur mon site ${myName}!`;
console.log(salutation); //retournera “Bienvenue sur mon site Alexander!”

//-----Définissez des objets et leurs attributs avec des classes----------------
//Découvrez les objets
let myBook = {
  title: "The Story of Tau",
  author: "Will Alexander",
  numberOfPages: 250,
  isAvailable: true,
};

// Accédez aux données d'un objet
// notation pointée (dot notation)
let myBook1 = {
  title: "L'Histoire de Tao",
  author: "Will Alexander",
  numberOfPages: 250,
  isAvailable: true,
};
let bookTitle = myBook1.title; // "L'Histoire de Tao"
let bookPages = myBook1.numberOfPages; // 250

// La notation bracket (bracket notation)
let myBook2 = {
  title: "L'Histoire de Tao",
  author: "Will Alexander",
  numberOfPages: 250,
  isAvailable: true,
};
let bookTitle2 = myBook2["title"];
let bookPages2 = myBook2["numberOfPages"];

// Regroupez vos données avec les tableaux et les objets
let firstFrontRowGuest;
let secondFrontRowGuest;
firstFrontRowGuest = "Sarah Kate";
secondFrontRowGuest = "Audrey Simon";

// Utilisez un tableau pour enregistrer une liste ordonnée d'éléments
// tableau vide
let guests = [];

// Utilisez des valeurs plutôt que des références
let artistProfile = {
  name: "Tao Perkington",
  age: 27,
  available: true,
};
let allProfiles = [artistProfile];
artistProfile.available = false;
console.log(allProfiles);

// Travaillez sur les tableaux--------------------------
// Le comptage d'éléments
let guest = ["Will Alexander", "Sarah Kate", "Audrey Simon"];
let howManyGuests = guest.length;

// L'ajout et la suppression d'éléments (push, unshift, pop)
guest.push("Tao Perkington");
guests.unshift("Tao Perkington");
guests.pop();
