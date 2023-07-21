//////////////
// Travaillez sur les fonctions
// On définit la fonction

function afficherDeuxValeurs(valeur1, valeur2) {
  console.log("Première valeur:" + valeur1);
  console.log("Deuxième valeur:" + valeur2);
}

// On exécute la fonction
afficherDeuxValeurs(12, 23);

//////////////////
const monTableau = [2, 3, 5, 6];
for (let elementDeTableau of monTableau) {
  console.log(elementDeTableau);
}

// Définissez des méthodes d'instance et des propriétés
// Tirez parti des classes avec des méthodes d'instance
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  showBalance() {
    console.log("Solde: " + this.balance + " EUR");
  }
}
const newAccount = new BankAccount("Will Alexander", 500);

newAccount.showBalance();

///////////////
// Découvrez les méthodes statiques
const randomNumber = Math.random();

const roundMeDown = Math.floor(495.966);

////////////////////////////////
class BePolite {
  static sayHello() {
    console.log("Hello!");
  }

  static sayHelloTo(name) {
    console.log("Hello " + name + "!");
  }

  static add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }
}

BePolite.sayHello();

BePolite.sayHelloTo("Will");

const sum = BePolite.add(2, 3);

// Écrivez des fonctions propres
// DRY – Don't Repeat Yourself (Ne vous répétez pas) – est un principe de programmation qui réduit au minimum la répétition du code.
const printStringStats = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  const wordCount = wordArray.length;
  let letterCount = 0;

  for (let word of wordArray) {
    word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    letterCount += word.length;
  }

  const averageWordLength = parseFloat((letterCount / wordCount).toFixed(2));
  const stringStats = {
    wordCount: wordCount,
    letterCount: letterCount,
    averageWordLength: averageWordLength,
  };

  console.log(stringStats);
};

///////////////////
const getWordCount = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  return wordArray.length;
};

const getLetterCount = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  let totalLetters = 0;

  for (let word of wordArray) {
    word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    totalLetters += word.length;
  }

  return totalLetters;
};

const getAverageWordLength = (stringToTest) => {
  return parseFloat(
    (getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2)
  );
};

const printStringStats1 = (stringToTest) => {
  console.log({
    wordCount: getWordCount(stringToTest),
    letterCount: getLetterCount(stringToTest),
    averageWordLength: getAverageWordLength(stringToTest),
  });
};

/////////////////////////////////////////
const getWordCountA = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  return wordArray.length;
};

const getLetterCountA = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  let totalLetters = 0;
  for (let word of wordArray) {
    // retire la ponctuation pour ne compter que les lettres
    word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    totalLetters += word.length;
  }

  return totalLetters;
};

/*
 ** renvoie la longueur moyenne des mots
 ** arrondie à deux chiffres après la virgule
 */
const getAverageWordLengthA = (stringToTest) => {
  return parseFloat(
    (getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2)
  );
};

const printStringStatsA = (stringToTest) => {
  console.log({
    wordCount: getWordCount(stringToTest),
    letterCount: getLetterCount(stringToTest),
    averageWordLength: getAverageWordLength(stringToTest),
  });
};
////////////
const getLetterCountB = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  let totalLetters = 0;
  for (let word of wordArray) {
    // retire la ponctuation pour ne compter que les lettres
    word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    totalLetters += word.length;
  }

  return totalLetters;
};

////////////////////////////////////
//variable de différentes personnes
let personne1 = "Jean";
let personne2 = "Paul";
let person3 = "Marcel";

//On met la première lettre en majuscule, on salue la première personne et on donne le nombre de lettre dans son prénom
personne1 = personne1[0].toUpperCase() + personne1.substr(1);
const longueurPrenom1 = personne1.length;
console.log(
  `Bonjour ${personne1}, ton prénom contient ${longueurPrenom1} lettres`
);

//On met la première lettre en majuscule, on salue la deuxième personne et on donne le nombre de lettre dans son prénom
personne2 = personne2[1].toUpperCase() + personne2.substr(1);
const longueurPrenom2 = personne2.length;
console.log(
  `Bonjour ${personne2}, ton prénom contient ${longueurPrenom2} lettres`
);

//On met la première lettre en majuscule, on salue la troisième personne et on donne le nombre de lettre dans son prénom
// personne3 = personne3[2].toUpperCase() + personne3.substr(1);
// const longueurPrenom3 = personne3.length;
// console.log(
//   `Bonjour ${personne3}, ton prénom contient ${longueurPrenom3} lettres`
// );

////////////////////////////////////

//variable de différentes personnes
let personne5 = "Jean";
let personne6 = "Paul";
let personne7 = "Marcel";

function saluer(prenom) {
  //On met la première lettre en majuscule, on salue la personne et on donne le nombre de lettre dans son prénom
  const monPrenom = prenom[0].toUpperCase() + prenom.substr(1);
  const longueurPrenom = monPrenom.length;
  console.log(
    `Bonjour ${monPrenom}, ton prénom contient ${longueurPrenom} lettres`
  );
}
saluer(personne5);
saluer(personne6);
saluer(personne7);

///////////////////////////////////////////////
//tableau des âges des élèves dans la classe

const agesElevesDeClasse = [14, 14, 15, 14, 16, 14, 14, 13];

// Nombre d'élèves

const nombreEleves = agesElevesDeClasse.length;

// variable pour calculer la somme des âges

let sommeAges = 0;

for (let age of agesElevesDeClasse) {
  sommeAges += age;
}

//moyenne d'âge dans la classe

const moyenneAgesDeClasse = sommeAges / nombreEleves;

console.log(
  "Il y a " +
    nombreEleves +
    " élèves dans la classe et la moyenne d'âge est " +
    moyenneAgesDeClasse
);

///////////////////////////////
const temperature = 25;

if (temperature < 10) {
  console.log("Il fait très froid");
} else if (temperature < 0) {
  console.log("Il fait froid");
} else if (temperature < 10) {
  console.log("Il fait frais");
} else if (temperature < 20) {
  console.log("Il fait doux");
} else if (temperature < 30) {
  console.log("Il fait bon");
} else {
  console.log("Il fait chaud");
}

// Testez qu'une fonction fait ce qu'elle dit
const getWordCount0 = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  return wordArray.length;
};

const getLetterCount0 = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  let totalLetters = 0;
  for (let word of wordArray) {
    word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    totalLetters += word.length;
  }

  return totalLetters;
};

///////////////////////////
const testSimpleWordCount = () => {
  const testString = "I have four words!";
  if (getWordCount(testString) !== 4) {
    console.error("Simple getWordCount failed!");
  }
};

const testEdgeWordCount = () => {
  const testString = "             ";
  if (getWordCount(testString) !== 0) {
    console.error("Edge getWordCount failed!");
  }
};

const testSimpleLetterCount = () => {
  const testString = "I have twenty one letters!";
  if (getLetterCount(testString) !== 21) {
    console.error("Simple getLetterCount failed!");
  }
};

const testEdgeLetterCount = () => {
  const testString = '")(&;//!!';
  if (getLetterCount(testString) !== 0) {
    console.error("Edge getLetterCount failed!");
  }
};

// Déboguez votre fonction
const getWordACount = (stringToTest) => {
  const wordArray = stringToTest.split("");
  return wordArray.length;
};

//////////////////////
const getWordBCount = (stringToTest) => {
  const wordArray = stringToTest.split("");
  console.log("Word array in getWordCount: ");
  console.log(wordArray);
  return wordArray.length;
};
getWordBCount("I am a fish");

// Découvrez la récursivité : l'appel de fonctions à l'intérieur d'elles-mêmes
const findElement = (array, thingToFind) => {
  for (let element of array) {
    if (element === thingToFind) {
      return true;
    }
  }

  return false;
};

///////////////////////////////
const binarySearch = (array, thingToFind, start, end) => {
  let mid = Math.floor((start + end) / 2);
  if (array[mid] === thingToFind) {
    return true;
  }

  if (thingToFind < array[mid]) {
    // il faut rechercher dans la première moitié
    return binarySearch(array, thingToFind, start, mid - 1); // on utilise (mid - 1) car on sait que l'on n'a pas besoin de l'élément mid, il a déjà été vérifié !
  } else {
    // il faut rechercher dans la deuxième moitié
    return binarySearch(array, thingToFind, mid + 1, end);
  }
};

////////////////////////////////////////
const binarySearch1 = (array, thingToFind, start, end) => {
  if (start > end) {
    return false;
  }

  let mid = Math.floor((start + end) / 2);
  if (array[mid] === thingToFind) {
    return true;
  }

  if (thingToFind < array[mid]) {
    return binarySearch1(array, thingToFind, start, mid - 1);
  } else {
    return binarySearch1(array, thingToFind, mid + 1, end);
  }
};
