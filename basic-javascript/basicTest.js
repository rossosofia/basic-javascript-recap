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


