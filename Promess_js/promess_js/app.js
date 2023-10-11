////devision
const division = (a, b) => {
  return new Promise((resolve, reject) => {
    const result = a / b;
    if (b !== 0) {
      return resolve(`${result}`);
    }
    reject('calcul invalid');
  });
};
division(30, 4)
  .then((result) => result)
  .then((result) => {
    console.log('voici le resultat: ' + ' ' + result);
  })

  .catch((err) => {
    console.log('Error:' + ' ' + err);
  });

//-----------  multiplication-----------------------

const calcul = (a, b) => {
  return new Promise((resolve, reject) => {
    const result = a * b;
    if (result < 1000) {
      resolve(result);
    } else {
      reject('resultat trop petit');
    }
  });
};
calcul(30, 9)
  .then((result) => result)
  .then((result) => {
    console.log('voici le resultat: ' + ' ' + result);
  })

  .catch((err) => {
    console.log('Error:' + ' ' + err);
  });

//----------------addition------------------
const addition = (a, b) => {
  return new Promise((resolve, reject) => {
    const result = a + b;
    if (a > 0) {
      return resolve(`${result}`);
    } else {
      reject('Erreur de calcul');
    }
  });
};
addition(30, 79)
  .then((result) => result)
  .then((result) => {
    console.log('voici le resultat: ' + ' ' + result);
  })

  .catch((err) => {
    console.log('Error:' + ' ' + err);
  });

//-------------------soustraction------
const soustraction = (a, b) => {
  return new Promise((resolve, reject) => {
    const result = a - b;
    if (a > b) {
      return resolve(`${result}`);
    } else {
      reject('Erreur de calcul');
    }
  });
};
soustraction(80, 79)
  .then((result) => result)
  .then((result) => {
    console.log('voici le resultat: ' + ' ' + result);
  })

  .catch((err) => {
    console.log('Error:' + ' ' + err);
  });

//-----------Modulo--------------
const modulo = (a, b) => {
  return new Promise((resolve, reject) => {
    const result = a % b;
    if (a % b != 0) {
      return resolve(`${result}`);
    } else {
      reject('Erreur de calcul');
    }
  });
};
modulo(123, 10)
  .then((result) => result)
  .then((result) => {
    console.log('voici le resultat: ' + ' ' + result);
  })

  .catch((err) => {
    console.log('Error:' + ' ' + err);
  });
