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

//variable_name.length

/* you can determine the amount of items or indexes
within a variable using  the variable_name.length
property*/

let message = "Hello!";
console.log(message.length); //6
let array = ["Aron", "Loraine", "Mia", "Chase"];
console.log(array.length); //4
console.log(array[2]); //Mia
console.log(array[2].length); //3

//indexOf(), includes(), startsWith(), and endsWith()

/*the indexOf() method takes a character and
yields the first index of the string to which
the character belongs*/

let person_name = array[2];
console.log(person_name);
console.log(person_name.indexOf("M"));

/*the includes() method takes a character
within a word or word within a sentence
and indicates wether or not that character
or word is in that word or sentence*/

console.log(person_name.includes("a")); //true

/*The startsWith() and endsWith() methods 
work similar to indexOf. They take characters 
and determine weather or not the character
begins with or ends with that character chosen.*/

console.log(person_name.startsWith("M")); //true
console.log(person_name.endsWith("a")); //true

//toLowerCase(), toUpperCase(), split(), and slice()

//toLowerCase() takes a string and converts all upper case letters to lower case
console.log(person_name.toLocaleLowerCase()); //mia
//toUpperCase() takes a string and converts all lower case letters to upper case
console.log(person_name.toUpperCase()); //MIA
//slice(a, b) takes two numbers a and b and includes only the letters in between a and b including a and excluding b
console.log(person_name.slice(1, 2)); //i
console.log(person_name.split(" "));

//let, const, and var
//indexOf()
//includes()
//startsWith()
//endsWith()
//toLowerCase()
//toUpperCase()
//split()
//splice()
