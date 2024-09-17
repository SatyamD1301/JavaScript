console.log(2>1);  //=>true
console.log(2!=1);  //=>true
console.log("2">1);  //=>true
console.log(2.0>"2.0");  ///=++>false
console.log(null>0);  //false
console.log(null==0);  //false
console.log(null>=0);  //=>true

// In this the NUll is converted iinto the zero that why the last 2 expect the last one show false and last one show true

// == =>. this check the data and convert the data type when needed

console.log("2"==2);   //=>true

// === => this is strict check It does not only check the data but also the data types

console.log("2"===2);   //=>False
