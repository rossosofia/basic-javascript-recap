import { Person } from "./person.js";
import { Cat } from "./exercise-class.js"

let firstname = "Christian";
const birthDate = new Date(1979, 1, 1);

console.log(firstname);
console.log(birthDate);

firstname = "John"
console.log(firstname)

function add(number1, number2){
    return number1+number2;
}

console.log(add(1,3));

const result = add(1, "Robert");
console.log(result);

let cat1 = {
    name: 'Monty',
    color: 'grey',
    gender: 'male',
    getNameAndColor: function() {
        return this.name + ' ' + this.color
    }};
console.log(cat1);
cat1.species= 'Main Coon'; //i'm adding a new property to an object
console.log(cat1.getNameAndColor());

// ------ //

const person = {
   myFirstname: 'Christian', myLastname: 'Kirschberg'
};

// object destructuring
const {myFirstname, myLastname} = person;
console.log(myFirstname, myLastname);

//creating a person object with a constructur
const person1 = new Person('Christian', 'Cats');
person1.greet();

//javascript array
let students = ["Patrick", "Kengo", "Lavi", "Thomas", 3, true, [], undefined]
students.push("Kai");
console.log(students);
console.log(students[0]);
let students2 = students.slice(0,3)
console.log(students2);

//Adding an object on array
students.push({name: 'Sofia', hobby: 'Roller Skating'});
console.log(students);

//accessing a value in an array
console.log(students[9].hobby)


// --- exercise-class ---

const kitty1 = new Cat('Mio', 'Black Silver', 'Siberian');
console.log(kitty1);
console.log(kitty1.getData());
console.log(kitty1.getName());
kitty1.setName("Bolsonello");
console.log(kitty1.getName());

const kitty2 = new Cat('Mimi', 'Seal Point', 'Siamese');

const catsInMyLife = [];

catsInMyLife.push(kitty1, kitty2);

console.log(catsInMyLife);


// --- exercise-array ---
const names = ["Sofia", "Gra", "Nico", "Eli", "Ainoa"];
console.log(names[0]);


console.log(names.indexOf("Nico"))

console.log(names.indexOf("Vanja"));

names.push("Poppy");
console.log(names);

const firstThreeNames = names.slice(0, 3);
console.log(firstThreeNames); 

const friend1 = {
    firstname: "Massimo Vincenzo",
    lastname: "Del Piaggio",
    email: "massi@gmail.com"
};

const friend2 = {
    firstname: "Camilla",
    lastname: "Gardner",
    email: "malika@gmail.com"
};

const people = [friend1, friend2];
console.log(people); 
console.log(people[0].email);

// --- exercise-arrays-and-objects---

class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.grades = [];
    }
}

function addGrade(student, grade) {
    student.grades.push(grade);
}

function updateStudentName(student, newName) {
    student.name = newName;
}

const student = new Student("Sofia", 505);

updateStudentName(student, "Sofia");
console.log(student);

addGrade(student, 7);
addGrade(student, 12);
addGrade(student, 10);

updateStudentName(student, "Sofia Amoroso");
console.log(student);