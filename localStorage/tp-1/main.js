// Local Storage
// Expire si on supprime l'historique/cache
// 10mb max

// localStorage.setItem('mbaye', '20');
// localStorage.removeItem('mbaye');
// localStorage.removeItem('casquette de laye 1');
//------------------------------------------
// session storage
// Se supprime a la fin d'une session
// 5mb

// sessionStorage.setItem('watchtime', '500');
// sessionStorage.removeItem('watchtime');
//----------------------------------------------
// Les cookies
// Expirer quand on le souhaite, de base a la fin de la session
// 4kb max

// document.cookie = `voiture=audit; expires=${new Date(
//   2023,
//   9,
//   17
// ).toUTCString()}`;
//-----------------------------------------
// const Cookie = document.cookie;
// // set a cookie
// Cookie.set('username', 'admin');

// // get a cookie
// console.log(Cookie.get('username')); // admin

// // remove a cookie by a name
// Cookie.remove('username');

//--------------------mdn web docs------------

// document.cookie = 'name=oeschger; SameSite=None; Secure';
// document.cookie = 'favorite_food=tripe; SameSite=None; Secure';

function showCookies() {
  const output = document.getElementById('cookies');
  output.textContent = `=> ${document.cookie}`;
}

function clearOutputCookies() {
  const output = document.getElementById('cookies');
  output.textContent = '';
}

//----------------Écrire dans document.cookie-----------
// document.cookie = 'user=laye; secure';
// alert(document.cookie);

//-------------------------
// special characters (spaces), need encoding
// let name = "Je m'appelle";
// let value = 'Abdoulaye DIALLO';

// encodes the cookie as my%20name=John%20Smith
// document.cookie = name + ' ' + value;

// alert(document.cookie); // ...; my%20name=John%20Smith

// const userArray = ['Obaseki', 25];
// localStorage.setItem('utilisateur', JSON.stringify(userArray));

//------------------------
window.localStorage.setItem('theme', 'dark');
console.log(window.localStorage.length); // 1
console.log(localStorage.length); // 1
