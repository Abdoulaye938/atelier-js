// class Employee {
//   constructor() {
//     var name;
//     var rating;
//   }
//   getName() {
//     return this.name;
//   }
//   setName(name) {
//     this.name = name;
//   }

//   getRating() {
//     return this.rating;
//   }
//   setRating(rating) {
//     this.rating = rating;
//   }
// }
// var emp = new Employee();
// emp.setName('Naren');
// emp.setRating(9);
// document.writeln(emp.getName() + ' ' + emp.getRating());
////////////////////////////////////////////////////////////////////////
//Déclaration de la classe
// class Employee {
//   //Initialisation d'un objet
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
//   //Déclaration de la méthode
//   detail() {
//     document.writeln(this.id + ' ' + this.name + '<br>');
//   }
// }
// //passage d'un objet à une variable
// var e1 = new Employee(101, 'Martin Roy');
// var e2 = new Employee(102, 'Duke William');
// e1.detail(); //appel de la méthode
// e2.detail();
///////////////////////////////////////////////////////////////////////////

//Declaring class
class Employee {
  //Initializing an object
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  detail() {
    document.write(this.id + ' ' + this.name + '<br>');
  }
}
//Here, we are invoking the class before declaring it.
var e1 = new Employee(101, 'Martin Roy');
var e2 = new Employee(102, 'Duke William');
e1.detail(); //calling method
e2.detail();
