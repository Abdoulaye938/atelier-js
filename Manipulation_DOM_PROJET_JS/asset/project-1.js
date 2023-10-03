// // Variables

// let btn = document.querySelector('#new-quote');
// let quote = document.querySelector('.quote');
// let person = document.querySelector('.person');

// // const quotes = [
// //   {
// //     quote: `"La meilleure façon de se retrouver est de se perdre au service des autres."`,
// //     person: ` Mahatma Gandhi`,
// //   },
// //   {
// //     quote: `"Si vous voulez vivre une vie heureuse, associez-la à un objectif et non à des personnes ou à des choses."`,
// //     person: ` Albert Einstein`,
// //   },
// //   {
// //     quote: `"À son meilleur, l’homme est le plus noble de tous les animaux ; séparé de la loi et de la justice, il est le pire."`,
// //     person: `Aristotle`,
// //   },
// //   {
// //     quote: `"Votre temps est limité, alors ne le perdez pas à vivre la vie de quelqu'un d'autre."`,
// //     person: ` Steve Jobs`,
// //   },
// //   {
// //     quote: `"Dis-le-moi et j'oublie. Apprends-moi et je m'en souviens. Implique-moi et j'apprends."`,
// //     person: ` Benjamin Franklin`,
// //   },
// //   {
// //     quote: `"Si vous regardez ce que vous avez dans la vie, vous en aurez toujours plus. Si vous regardez ce que vous n’avez pas dans la vie, vous n’en aurez jamais assez."`,
// //     person: `Oprah Winfrey`,
// //   },
// //   {
// //     quote: `"Peu importe la lenteur avec laquelle vous avancez, tant que vous ne vous arrêtez pas."`,
// //     person: `Confucius`,
// //   },
// //   {
// //     quote: `"Nos vies commencent à se terminer le jour où nous devenons silencieux sur les choses qui comptent."`,
// //     person: `Martin Luther King, Jr.`,
// //   },
// //   {
// //     quote: `"N’oubliez pas que ne pas obtenir ce que vous voulez est parfois un merveilleux coup de chance."`,
// //     person: `Dalai Lama`,
// //   },
// //   {
// //     quote: `"Le voyage de mille kilomètres commence par un pas."`,
// //     person: `Lao Tzu`,
// //   },
// // ];

// const quotes = [
//   {
//     quote: `"Mahatma Gandhi"`,
//     person: `Mahatma Gandhi`,
//   },
//   {
//     quote: `"laye DIALLO"`,
//     person: `Diallo laye`,
//   },
//   {
//     quote: `"moussa diallo"`,
//     person: `diallo moussa`,
//   },
//   {
//     quote: `"laye dddddddddd"`,
//     person: `dddddddddddd diallo`,
//   },
// ];
// btn.addEventListener('click', function () {
//   let random = Math.floor(Math.random() * quotes.length);

//   quote.innerText = quotes[random].quote;
//   person.innerText = quotes[random].person;
// });

////////////////////-----------------refaire----------------------
const btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: `"Mahatma Gandhi"`,
    person: `Mahatma Gandhi`,
  },
  {
    quote: `"laye DIALLO"`,
    person: `Diallo laye`,
  },
  {
    quote: `"moussa diallo"`,
    person: `diallo moussa`,
  },
  {
    quote: `"laye dddddddddd"`,
    person: `dddddddddddd diallo`,
  },
];

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
