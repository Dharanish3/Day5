// 1.   Json (for , for in , for of )
const person = [
{
    "name":"john",
    "age":"20",
    "gender" : "male"
},
{
    "name":"Kajal",
    "age":"30",
    "gender" : "female"
},
{
    "name":"Jai",
    "age":"40",
    "gender" : "male"
}
]

for(var i = 0; i < person.length ; i++){
    console.log(   `Name is : ${person[i].name}`)
}

for(var ind in person){
    console.log(`Age is : ${person[ind].name}`)
}

for(var value of person){
    console.log(`Gender is : ${value.gender}`)
}



// 2.Resume Create in Json

const Resume = {
    "name":"Dharanish",
    "age":"23",
    "gender" : "male",
    "email" : "dharanishsk9698@gmail.com",
    "phone" : "9876543210",
    "graduation" : {
        "school" : "IRTT",
        "degree" : "Anna University",
        "grade" : "88%",
        "year" : "2022"
    }
}

const {name, age, gender, email, phone, graduation: {school, degree, grade, year}} = Resume;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Gender: ${gender}`);
console.log(`Email: ${email}`);
console.log(`Phone: ${phone}`);
console.log(`Graduation School: ${school}`);
console.log(`Graduation Degree: ${degree}`);
console.log(`Graduation Grade: ${grade}`);
console.log(`Graduation Year: ${year}`);
   
  

