// How the data stored and access in the memory basis on the thatttttttt data is divided into two types 

/*
=>1 Primitive/Call by value=> means when ccopy we geeeeeet access of value not the reference or address 
so the change occured in tttttttthe real values

7 Types:-  tring, Number,Boolean,Null,Undefined,Symbol,BigInt

=>2 Non-Primitive/Refernce type
=> we get the refrence of their memory

 Array,Object,Functon

Jss is dyanmic types because we do not have to define the types of variable wheather it is int or anything that why t is not static typed 

 
*/


/*
if we use the symbol data types even when we use the same value it does not return the same value


*/
const id=Symbol("123");
const anotherId=Symbol("123");

console.log(id);
console.log(anotherId);
console.log(id===anotherId); //=>false
console.log(id==anotherId); //=>false

const myObj={
    name:"Satyam",
    abe:"22",
}
const myFunction=function(){
    console.log("Hello World");
}