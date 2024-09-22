// singleton => constructer se object bnate hai only one

// when we create through object literals singleton does not form

// it form only when we create through constructor

//object literals

// in object we enter value through key and values

// here we can define our own key

// key inbuilt understand as string so we does not write as string

// key:values

const mysys=Symbol("key")

const JsUser={
    name:"Satyam",
    'fullName':"satyam Dubey",
    [mysys]:"key1",
    age:21,
    add:"UP",
    email:"satyam@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]

}

// to acces the object literals we use
// object_name . key;

// object["key"]
console.log(JsUser.email);
console.log(JsUser["email"]);

// we can not access object by using of dot(.) when there space in the value
// do we use second method

console.log(JsUser["fullName"]);

// to use a symbol we must declare the key in the square bracket

//[keyOfSymbol]:"value"
console.log(JsUser[mysys]);

// to add/change the value

JsUser.email="Dubey@google"
console.log(JsUser["email"]);
console.log(JsUser.fullName);

// to make that no one can change any value we use

// object.freeze(object_name)

// Object.freeze(JsUser)
JsUser.emai="sd@goole.com"
console.log(JsUser);

// use of fxn

JsUser.greeting=function(){
    console.log('Hello JS user');
}
console.log(JsUser.greeting());

JsUser.greetingtwo=function(){
    console.log(`Hello Js User ${this.fullName}`);
}
console.log(JsUser.greetingtwo());


// we mostly access onlyby use of the dot operator object.literals

// but there are some cases where we mist use the [] bracket