//determining the length of a string using the .length method
let playStation2Game = "Fatal Frame";
let lengthOfGame = playStation2Game.length;
console.log(lengthOfGame);

//acessing characters by index
console.log(playStation2Game[4]);
console.log(playStation2Game[0]);

//Methods of Searching Strings for Characters [indexOf(), includes(), startsWith(), endsWith()]

//Searching the index of characters using the indexOf() method
console.log(playStation2Game.indexOf("a")); // 1 - returns the index of the first instance sence there are 3 of the letter a
console.log(playStation2Game.indexOf("y")); // -1 is returned sence there is no letter y in the string

let threeStatesOfMatter = "Solid, Liquid, Gas";
console.log(threeStatesOfMatter.indexOf("Liquid")); // 7 can be used with a combo of consecutive characters

//Determining wheather or not a character or set of characters is within a string using the includes() method
console.log(threeStatesOfMatter.includes("Liquid")); //true
console.log(threeStatesOfMatter.includes(",")); // true
console.log(threeStatesOfMatter.includes("Mike")); //false
console.log(threeStatesOfMatter.includes("q")); //true
console.log(threeStatesOfMatter.includes("A")); //false - case sensitive

//Determining wheather or not a string starts with or ends with a character using the two startsWith() and endsWith() methods
console.log(playStation2Game.startsWith("F")); //true
console.log(playStation2Game.startsWith("Fatal")); //true
console.log(playStation2Game.startsWith("g")); //false
console.log(playStation2Game.endsWith("Frame")); //true
console.log(playStation2Game.endsWith("e")); //true
console.log(playStation2Game.endsWith("m")); //false

//Methods of Converting Strings [toLowerCase(), toUpperCase(), split(), slice(a, b)]

// toLowerCase() and toUpperCase() methods:
console.log(playStation2Game.toLowerCase()); //fatal frame
console.log(playStation2Game.toUpperCase()); //FATAL FRAME

//Converting a string into an array with the split() method
console.log(playStation2Game.split(" ")); //['Fatal', 'Frame']
console.log(threeStatesOfMatter.split(" ")); //['Solid,', 'Liquid,', 'Gas']

//Cutting part of a string off with the slice(a, b) method - (includes a but not b)
console.log(playStation2Game.slice(0, 3)); //Fat
console.log(playStation2Game.slice(6)); //Frame (you can use just a and not b)

//Numbers and Special Numeric Values

// [Number.isFinite(), Number.isNaN()]
console.log(Number.isFinite(20 / 0)); //false    20/0 is Infinity
console.log(Number.isFinite(-20 / 0)); //false  -20/0 is -Infinity
console.log(Number.isNaN(Infinity * 0)); //true
console.log(Number.isNaN(10 * "ten")); //true
console.log(Number.isNaN(10 - "ten")); //true
console.log(Number.isNaN(10 / "ten")); //true
console.log(Number.isNaN(0 / 0)); //true
console.log(Number.isNaN(5)); //false

//Methods of Working with Numbers [Math.something(), parseInt(), parseFloat(), Number.isInteger()]

//Math.something() methods [Math.ceil(), Math.floor(), Math.round, Math.max(), Math.min(), Math.random()]
console.log(Math.ceil(9.1)); //10
console.log(Math.floor(9.9)); //9
console.log(Math.round(4.5)); //5
console.log(Math.round(4.49)); //4
console.log(Math.max(3, 6, 8, 1)); //8
console.log(Math.min(3, 8, 2, 6)); //2
console.log(Math.random());

//parseInt() - this method detects a number in a string if number comes first

var duckQuantity = "2 ducks";
var catQuantity = "cats times 3";
console.log(parseInt(duckQuantity)); //2
console.log(parseInt(catQuantity)); //NaN

//parseFloat() - this does the same thing only with decimal quantities

var height = "6.5 feet tall";
console.log(parseFloat(height)); //6.5

//let, const, var
//.length
//indexOf()
//includes()
//startsWith()
//endsWith()
//toUpperCase()
//toLowerCase()
//split()
//slice(a, b)
//Number.isFinite()
//Number.isNan()
//Math.ceil()
//Math.floor()
//Math.round()
//Math.max()
//Math.min()
//Math.random()
//parseInt()
//parseFloat()
