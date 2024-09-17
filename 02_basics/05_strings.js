const name="Satyam"
const value=50
// console.log(name+value);

//=>this method is very outdated so we use a new method for the string concatenation and many more things

//=> Strings interpolation means use of backticks(``)
// console.log(`My name is ${"Satyam Dubey"} and my valuue is ${50}`);

// tring is an Object of a key value pair

 const gameName=new String("Satyam-D");

// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("y"));

const newString=gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-1,1);
console.log(anotherString);


//trim has both trim start with and trim end with

// we also have replace/remove

// string.replace(oldvalue,newValue);

// string .includes('string)

//split(seprator,limit)

