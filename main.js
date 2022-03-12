// String
// Number
// Variable
// Boolean
// float

// Declare a class and instantiate it

// let number = 1;
// let string = "Shanesh";
// let float = 1.23;
// let boolean = true;

// function print(name) {
//   document.querySelector(".lists").innerHTML += name + "<br/>";
// }

// print(number);
// print(string);
// print(float);
// print(boolean);

// class printHello {
//   value = "Hello";
// }

// let classObj = new printHello();

// document.querySelector(".lists").innerHTML = classObj.value;

//create calculator

// class NormalCalc {
//   num1 = 0;
//   num2 = 0;

//   constructor(number1, number2) {
//     this.num1 = number1;
//     this.num2 = number2;
//   }

//   add() {
//     return this.num1 + this.num2;
//   }

//   multiply() {
//     return this.num1 * this.num2;
//   }

//   subtract() {
//     return this.num1 - this.num2;
//   }

//   divide() {
//     return this.num1 / this.num2;
//   }
// }

// class AdvanceCalc extends NormalCalc {
//   square() {
//     return Math.pow(this.num1, this.num2);
//   }

//   modulus() {
//     return this.num1 % this.num2;
//   }

//   percentage() {
//     return (this.num1 / this.num2) * 100;
//   }
// }

// let assignNumber = new AdvanceCalc(5, 2);
// console.log(assignNumber.add());
// console.log(assignNumber.multiply());
// console.log(assignNumber.divide());
// console.log(assignNumber.subtract());
// Advance
// console.log(assignNumber.modulus());
// console.log(assignNumber.square());
// console.log(assignNumber.percentage());

// Make class like array foreach, push, map

// Class ko variable lai property
// Class ko function lai methods

// # Function
// - parameters: list numbers, number formatter
// - does: applies the number formatter to each number
// - returns: the formatted list of numbers

// # Example:

// apply_number_formatter([1, 2, 3, 4], function(number) {
//     return number + 1;
// });

function apply_number_formatter(list, numFormatter) {
  let num_formatter = [];

  for (let i = 0; i < list.length; i++) {
    num_formatter.push(numFormatter(list[i]));
  }

  return num_formatter;
}

const nlist = apply_number_formatter([1, 2, 3, 4], function (num) {
  return num + 1;
});

console.log(nlist);
