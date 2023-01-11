class User {

}
console.log("hello world");

// Type
// number, string, boolean, any

var i1: number = 10;
var i2 = 10; // i: number

var x; // var x: any
x = 10;
x = "hello";

var results: number[];
results = [10, 5, 3];


// enum
enum Color {
  Red, // 0
  Green = 3,
  Blue, // 4
}

console.log(Color.Blue);

enum Color {
  Yellow = 6,
}

console.log(Color['Yellow']);
console.log(Color[3]);

function add(a: number, b?: number): number {
  if (b === undefined) {
    b = 0;
  }
  return a + b;
}

console.log(add(10, 5));
console.log(add(10));

var add2 = (a: number, b: number): number => a + b;

console.log(add2(11, 22));

// Overload of function
function add3(a: number, b: number): number; // Signature
function add3(a: string, b: string): string;

function add3(a: any, b: any): any {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + ' ' + b;
  }
  return a + b;
}

console.log(add3(10, 20));
console.log(add3('hello', 'world'));
// console.log(add3('hello', 20)); // Error, The call would have succeeded against this implementation, but implementation signatures of overloads are not externally visible.