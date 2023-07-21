let prenom = "mousssa";
console.log(prenom);

// decouvrer jsbin
let numberOfGuests = 20;
console.log(numberOfGuests);

// Choisissez la condition appropriée pour contrôler le déroulement de votre programme (if, else, switch)

// Appréhendez les instructions if/else
let UserLoggedIn = true;
if (UserLoggedIn) {
  console.log("Utilisateur connecté!");
} else {
  console.log("Alerte, intrus!");
}
// (<, >,  )
const numberOfSeats = 30;
const numberOfGuest1 = 25;
if (numberOfGuest1 < numberOfSeats) {
  console.log("autoriser plus d'invites");
} else {
  console.log("n'autoriser de nouveau d'invites");
}

// Appréhendez une notion importante : le scope des variables
// En JavaScript, les variables créées par   let  ou   const  ne peuvent être vues ou utilisées qu'à l'intérieur du bloc de code dans lequel elles sont déclarées.
// Un bloc de code, aussi souvent appelé bloc tout court, est une section de code incluse entre accolades  {}.
// Ce phénomène est appelé portée des variables ou block scope (en anglais).

// let userLoggedIn = true;

// if (userLoggedIn) {
//   let welcomeMessage = "Welcome back!";
// } else {
//   let welcomeMessage = "Welcome new user!";
// }

// console.log(welcomeMessage);

let userLoggedIn = true;
let welcomeMessage = ""; // déclarer la variable ici

if (userLoggedIn) {
  welcomeMessage = "Welcome back!"; // modifier la variable extérieure
} else {
  welcomeMessage = "Welcome new user!"; // modifier la variable extérieure
}

console.log(welcomeMessage); // imprime 'Welcome back!'

// Utilisez les instructions switch
let firstUser = {
  name: "Will Alexander",
  age: 33,
  accountLevel: "normal",
};

let secondUser = {
  name: "Sarah Kate",
  age: 21,
  accountLevel: "premium",
};

let thirdUser = {
  name: "Audrey Simon",
  age: 27,
  accountLevel: "mega-premium",
};
// switch (firstUser.accountLevel) {
//   case "normal":
//     console.log("You have a normal account!");

//     break;
//   case "premium":
//     console.log("You have a premium account!");

//     break;
//   case "mega-premium":
//     console.log("You have a mega premium account!");
//     break;

//   default:
//     console.log("Unknown account type!");
// }
if (firstUser.accountLevel === "normal") {
  console.log("You have a normal account!");
} else if (firstUser.accountLevel === "premium") {
  console.log("You have a premium account!");
} else if (firstUser.accountLevel === "mega-premium") {
  console.log("You have a mega premium account!");
} else {
  console.log("Unknown account type!");
}

//Utilisez la bonne boucle pour répéter les tâches (for, while)
const numberOfPassengers = 10;
for (let i = 0; i < numberOfPassengers; i++) {
  console.log("Passager embarqué !");
}
/////////////////////////
let tdsiUcad = 20;
for (let i = 0; i < tdsiUcad; i++) {
  console.log("les etudiants de la tdsi !");
}
/////////////////////////
const number1OfPassengers = 10;
for (let i = 0; i < number1OfPassengers; i++) {
  console.log("Passager embarqué !");
}

console.log("Tous les passagers sont embarqués !");

// Travaillez sur des tableaux :  for… of et for… in
const passengers = [
  "Will Alexander",
  "Sarah Kate'",
  "Audrey Simon",
  "Tao Perkington",
];

for (let i in passengers) {
  console.log("Embarquement du passager " + passengers[i]);
}
////////////////
const passager = ["Abdoulaye DIALLO", "MoussaSARR", "Aliou SY", "Mame Cheikh "];

for (let passager1 of passager) {
  console.log("Embarquement du passager " + passager);
}

/////////////////
const passenger0 = [
  {
    name: "Will Alexander",
    ticketNumber: 209542,
  },

  {
    name: "Sarah Kate",
    ticketNumber: 169336,
  },

  {
    name: "Audrey Simon",
    ticketNumber: 779042,
  },

  {
    name: "Tao Perkington",
    ticketNumber: 703911,
  },
];

for (let passenger of passenger0) {
  console.log(
    "Embarquement du passager " +
      passenger.name +
      " avec le ticket numéro " +
      passenger.ticketNumber
  );
}

// Utilisez la bouclewhile
let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
  passengersBoarded++;
  passengersStillToBoard--;
  seatsLeft--;
}

console.log(passengersBoarded);

// Gérez des erreurs et des exceptions dans votre programme
// Découvrez trois types d'erreur(Appréhendez les erreurs de syntaxe)
// Découvrez les erreurs logiques
// Gérez les erreurs d'exécution
