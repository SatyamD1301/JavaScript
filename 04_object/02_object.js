// object singleton
// object by constructor

// const tinderUser=new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Satyam",
            lastname:"Dubey"
        }
    }
}
// console.log(regularUser.fullname);

// optional chainning

const obj1={
    1:'a',
    2:'b'
}
const obj2={
    3:'c',
    4:'d'
}
const obj4={
    5:'a',6:'b'
}
// const obj3={obj1,obj2}
// const obj3= Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}

// console.log(obj3); 



// Object.assign() => is static method it copies all enumerable own properties from one or more sources object to a target object

// =? It return a modified target object

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

