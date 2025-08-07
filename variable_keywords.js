/* const, let and var are the three keywords used to 
declare variables but const and let are more up-to-date
and const can't change*/

//let and const vs var

//var
var integer = 5;
console.log(integer);
integer = 6;
console.log(integer);

//let
let string = "Hello World!";
console.log(string);
string = "Hello Mia!";
console.log(string);

//const
const radius = 5;
console.log(radius);
//radius = 8; //this will give an error!
//console.log(radius); //this will give an error!
