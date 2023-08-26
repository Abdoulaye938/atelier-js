var myName = 'Beau';
myName = 8;

let ourName = 'freeCodeCamp';

const pi = 3.14;

//-------Storing Values with Assignment Opertor----

var a;
var b = 2;
a = 7;
b = a;
console.log(a);
console.log(b);

//---------------Initializing Variable
//---------------w/ Assignment Operator

var a = 9;
//------------Unitialized Variables---------

var a = 5;
var b = 10;
var c = ' I am a ';

a = a + 1;
b = b + 5;
c = c + 'String!';

//--------------Case Sensivity in variable----------
//------Declaration
var StulyCapVar;
var propreCamelCase;
var TitleCaseOver;

//-----------Assignement-------------
StulyCapVar = 10;
propreCamelCase = 'aString';
TitleCaseOver = 9000;

//-------------Adding Numbers--------

var sum = 10 + 10;
console.log(sum);

//-------------Subtracting Number--------
var difference = 45 - 33;

//-------------Multiplying Numbers---------

var product = 8 * 0;

//-------------Dividing Numbers-------------

var quotient = 66 / 33;

//-------------Incrementing Numbers-------------

var myVar = 87;
myVar = myVar + 1;
/*myVar = myVar + 1 = myVar++*/

//------------Decrement Numbers----------------

var myVar = 11;
myVar = myVar - 1;
/*myVar = myVar - 1 = myVar--*/

//-----------Decimal Numbers--------------

var ourDecimal = 5.7;

var myDecimal = 0.0009;

//-----------Multiply Decimals--------------
var product = 2.0 * 2.5;
console.log(product);

//-----------Divide Decimals--------------

var quotient = 4.4 / 2.0;
console.log(quotient);

//-------------Finding a Remainder-------------
var remainder;
remainder = 11 % 3;

//-------------Compound Assignment with Augmented Addition-------------

var a = 3;
var b = 17;
var c = 12;
a = a + 12; // a += 12
b = 9 + b; // b += 9
c = c + 7; // c += 7

//-------------Compound Assignment with Augmented Soustraction--------

var a = 11;
var b = 9;
var c = 3;
a = a - 6; // a -= 6
b = b - 15; // b -= 15
c = c - 1; // c -= 1

//-------------Compound Assignment with Augmented Multiplication----------

var a = 15;
var b = 12;
var c = 4.6;
a = a * 5; // a *= 6
b = b * 3; // b *= 15
c = c * 10; // c *= 1

//-------------Compound Assignment with Augmented Division----------

var a = 48;
var b = 108;
var c = 33;
a = a / 12; // a /= 12
b = b / 4; // b /= 4
c = c / 11; // c /= 11

//--------------Declaration String Variable---------------------
var firstName = 'LAYE';
var lastName = 'DIALLO';

var myfirstName = 'ABDOULAYE';
var mylastName = 'DIALLO';

//-------------Escaping Literal Quotes in String------------

var maStr = ' I am an "double quoted" string inside "double quoted';
console.log(maStr);

//---------------Quoting String with Single Quotes-----------------

var myStr = '<a href="http://www.google.com" target="_blank">Link</a>';

//---------------Escape Sequences in String-------------------------

/*****
 CODE OUPUT

 \'  single quote
 \"" double quote 
 \\  backslash
 \n  newline
 \r  carriage return
 \t  tab
 \b  backspace
 \f  form feed

 *****/
var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';

//----------------Concatenating Strings with plus Operator-----------
var ourStr = 'I am first. ' + 'I come second.';

var myStr = 'This is the start. ' + 'This is the end';

console.log(myStr);

//----------------------Concatenating Strings with plus Equals Operator---------

var ourStr = 'Iam fisrt';
ourStr += 'I am second';

var myStr = 'This is the first sentences ';
myStr += 'This is the second sentence';
console.log(myStr);

//---------------------Construction Strings with Variables--------------
var myName1 = 'freeCodeCamp';
var ourStr = 'Hello, my name is ' + myName1 + ', how are you ?';

var myName2 = 'Beau';
var myStr = 'My name is ' + myName2 + ' and I am well ?';

console.log(myStr);

//-----------Appending Variables to Strings---------------------

var anAdjective = 'awesome!';
var ourStr = 'freeCodeCamp is';
ourStr += anAdjective;

var someAdjective = 'worthwhie';
var myStr = 'Learning to code is ';
myStr += someAdjective;

console.log(myStr);

//-----------------------Find Length of String-----------------
var firstNameLengh = 0;
var firstName = 'Ada';

firstNameLengh = firstName.length;

var lastNameLengh = 0;
var lastName = 'Lovelace';

lastNameLengh = lastName.length;
console.log(lastNameLengh);

//-------------------Bracket Notation to Find First Character in String--------------
var firstLetterOffirstName = '';
var firstName = 'Ada';
firstLetterOffirstName = firstName[0];

var firstLetterOfLastName = '';
var lastName = 'loveLace';
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

//-------------------String Immutability---------------

var myStr = 'Hello World';
myStr = 'HELLO WORLD';

//--------------------Bracket Notation to Find Nth Character in String-------------

var firstName = 'Ada';
var secondLettreOfFirstName = firstName[1];

var lastName = 'Lovelace';

var thirdLetterOfLastName = lastName[2];

//--------------------Bracket Notation to Find Last Character--------------

var firstName = 'Ada';
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = 'Lovelace';

var lastLetterOfLastName = lastName[lastName.length - 1];

//--------------------Bracket Notation to Find Nth-to-Last Character in String------------------------

var firstName = 'Ada';
var thirdToLetterOfFirstName = firstName[firstName.length - 3];

var lastName = 'Lovelace';

var secondToLastLettreOfLastName = lastName[lastName.length - 2];

//-------------------Word Blanks---------------------------
function worldBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = '';
  result +=
    'The ' +
    myAdjective +
    ' ' +
    myNoun +
    ' ' +
    myVerb +
    ' ' +
    'to the store ' +
    ' ' +
    myAdverb;
  return result;
}
console.log(worldBlanks('dog', 'big', 'ran', 'quickly'));

//---------------------Store Mulltiple Values with Arrays------------------

var ourArray = ['John', 23];
var myArray = ['Quincy', 1];

//-------------------------Nested Arrays---------------------
var ourArray = [
  ['the universe', 42],
  ['everything', 101010],
];

var myArray = [
  ['Bulls', 23],
  ['White Sox', 45],
];

//-------------------Access Array Data With Indexes------------------
var ourArray = [50, 60, 70];
var ourData = ourArray[0];
var myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData);

//-------------------Modify Array Data With Indexes------
var ourArray = [18, 64, 99];
ourArray[1] = 45;

var myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray);

//-------------------Access Multi-Dimensional Array With Indexes-------------------------

var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
var myData = myArray[2][1];
console.log(myData);

//----------------Manipulation Arrays with push-----------
var ourArray = ['Stimpson', 'J', 'cat'];
ourArray.push(['happy', 'joy']);
var myArray = [
  ['John', 23],
  ['Cat', 2],
];
var myArray = [
  ['John', 23],
  ['Cat', 2],
];
myArray.push(['dog', 3]);

//----------------Manipulation Arrays with pop()------------
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();

var myArray = [
  ['John', 23],
  ['Cat', 2],
];
var removedFromMyArray = myArray.pop();
console.log(myArray);

//----------------Manipulation Arrays with shift()-----------------
var ourArray = ['Stimpson', 'J', ['Cat']];
var removedFromOurArray = ourArray.shift();

var myArray = [
  ['John', 23],
  ['dog', 3],
];
var removedFromMyArray = myArray.shift();
console.log(myArray);

//----------------Manipulation Arrays with unshift()-----------------
var ourArray = ['Stimpson', 'J', 'Cat'];
ourArray.shift();
ourArray.unshift('Happy');

var myArray = [
  ['John', 23],
  ['dog', 3],
];
myArray.shift();
myArray.unshift(['Paul', 35]);
// var removedFromMyArray = myArray.shift();
// console.log(myArray);

//------------------Shopping List----------------------
var myList = [['cereal', 3], ['milk', 3], ['banana', 3], ['Jus'], 4];

//------------------Write Reusable Code with Function----------------

function ourReusableFunction() {
  console.log('Hello, world');
}
ourReusableFunction();

function reusableFunction() {
  console.log('Hello, world');
}
reusableFunction();

//----------------Passing Values to Function with Arguments-----------------\

function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(11, 5);

function FunctionWithArgs(a, b) {
  console.log(a + b);
}
FunctionWithArgs(11, 5);

//-------------------------Global Scope and Functions-----------------

var myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = '';
  if (typeof myGlobal != 'undefined') {
    output += 'myGlobal:' + myGlobal;
  }
  if (typeof moopsGlobal != 'undefined') {
    output += 'oopsBlobal:' + oopsGlobal;
  }
  console.log(output);
}
fun1;
fun2;

//-------------------Local Scope and Functions---------------

function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();
console.log(myVar);

//---------------------Global Vs Local Scope in function--------------------

var outerWear = 'T-Shirt';

function myOutfit() {
  var outerWear = 'sweater';
  return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

//---------------------Return a value from a Function with return-----------
function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
  return num * 5;
}
console.log(timesFive(5));

//--------------Understanding Undefined Value Returned form a function-----------------
var sum = 0;
function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}

//---------------Assignment with a Returned Value----------------
var changed = 0;

function changed(num) {
  return (num + 5) / 3;
  changed = changed(10);
}

var processed = 0;
function processAgs(num) {
  return (num + 3) / 5;
  processed = processAgs(7);
}

//----------------------------Stand in Line-----------------
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];
console.log('before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log('After: ' + JSON.stringify(testArr));

//--------------------Boolean Values----------------------
function welcomToBooleans() {
  return false;
}

//-------------------------Use Condition Logic with If Statement--------------------
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "yes, it's true";
  }
  return "no, it's false";
}
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return 'yes, that was true';
  }
  return 'no, that was false';
}
console.log(trueOrFalse(true));

//---------------------------Comparison with the Equality Operator--------
