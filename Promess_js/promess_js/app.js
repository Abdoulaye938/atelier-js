//DECLARATION
const calcul = (num1, num2) => {
  return new Promise((resolve, reject) => {
    //.............
    const result = num1 * num2;

    if (result < 1000) {
      resolve(result);
    } else {
      reject('resultat trop petit');
    }
  });
};

// UTILISATION
calcul(30, 9)
  .then((result) => {
    console.log('resultat: ' + ' ' + result);
  })
  .catch((err) => {
    console.log('Error:' + ' ' + err);
  });
