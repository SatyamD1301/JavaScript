// Destucturing of object

// by using {} this braces


const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Satyam"
}

// to extract the value many time it is tidious to always use the dot operator

// so we use another method or way

// const {value}=objctname{}
const{courseInstructor}=course
console.log(courseInstructor);

// we can redefine the key name and yet get the value

// const {oldKey : newKey}=objectName

const {courseInstructor:Instructor}=course
console.log(Instructor);

// JSON =>it is same like object

// in json key and value both are usually string

// {
//     "name":"Satyam",
//     "coursename":"js in hindi",
//     "price":"free"
// }





