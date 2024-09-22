const score=400
// console.log(score);   => It print a numeric value taken by default

const balance=new Number(100)
// console.log(balance);   => It gives a specific value of types Number

// We can change the number types value into String

//=> number.toString()  and use the inbuilt different method of string

// console.log(balance.toString().length)
// console.log(balance.toFixed(1))   //=> It gives the value after the decimal point the number written in the toFixed(2)=> Gives two decimal point

// toFixed method work on the number types of value


const otherNumber=123.8966

// console.log(otherNumber.toFixed(2))

// console.log(otherNumber.toPrecision(3))

// toPrecision(x) gives the and only display the number of count =x means if we write the precision =4 a
// the total digit it show is 4

const hundreds=1000000

// console.log(hundreds.toLocaleString())


// **************************MATHS*****************************
// Maths libreay come to javascript by default

// console.log(Math.abs(-4));
// console.log(Math.round(4.64));
// console.log(Math.round(4.36));
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(4.7));
// console.log(Math.floor(4.9));
// console.log(Math.floor(4.3));

console.log(Math.random());

// We use math.random() when we need to generate a random value


// Math.random()=> Provide a random value between 0-1

// to get the whole integer value 0-9 we multiple it *10

//and to get value between 1-9 multiply *10 and +1

console.log((Math.random()*10)+1);

// to get the random number from specific vale to a specific value 

// this is the method

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)
