// Array is simple datta types

//=> JavaScript is resizable array

//=>Indexing start of from zero

//=> Array in java make shallow copy

//=> Shallow copy means copy share the same references point

//=? change in one  can be refected to the other copy

//=> Deep copy means copy does not share the same references point

// +> change in one can not reflected in other 

//*******************METHOD OF ARRAY*************

const myArr=[1,2,3,4,5]

const myHeros=["shaktiman",'ironman',"starange"]

const myArr2=new Array(1,2,3,4)

console.log(myArr[0]);
console.log(myHeros[1]);
console.log(myArr2[2]);

// // Array method

myArr.push(6)
console.log(myArr);

myArr.pop()


// // Unshift(val) => used to add val at the begining of array and shift entire array
 myArr.unshift(10)

// //shift() => It is jist like pop() fxn it delete the first element of array and shift entire array

 myArr.shift();

console.log(myArr.includes(10));

console.log(myArr.indexOf(2));


// // array.join() => .join add all the element into string

const newArr=myArr.join()

console.log(myArr);
 console.log(typeof newArr);


// //slice ,splice

// //slice => return a copy of a section of an array for boyh start and end


console.log("A ",myArr);

const myn1= myArr.slice(1,3);

console.log(myArr);
console.log(myn1);
console.log("B ",myArr);

const myn2= myArr.splice(1,3);

console.log("C ",myArr);
console.log(myn2);

//*************slice********** */

// slice => It does not manipulate the original array

// it does not include the upper bound

//**************splice************ */

//splice => It also manipulate the original array

// It does include the upper bound

// the original array manipulate does not conatin the value splice by


const marvel_Heros=["Ironman","Stange","Spderman"]
const dc_heros=["Superman","flash"]

marvel_Heros.push(dc_heros)

console.log(marvel_Heros);

const allHeros=marvel_Heros.concat(dc_heros)
console.log(marvel_Heros);
console.log(allHeros);

// // push => does not return new array beside it push the element as single element

// // concat => It does return another array and concat each element att the end

const all_heros=[...marvel_Heros,...dc_heros];

console.log(all_heros);

const array=[1,2,3,[4,5,6,],7,8,9,[2,5,8],[5,4,6]]

// flat(depth) => it is used to retrun a new array concating all the element recursively of given depth
 

const real_array=array.flat(Infinity)
console.log(real_array);

// Array.isArray("anything") => is used to check wheather anything is array or not

// Array.from(anything) => is used to convert anything into array

// Array.of => return new array of the set of element

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Satyam"));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

