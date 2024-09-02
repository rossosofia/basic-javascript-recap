import { Person } from "./person.js";

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

const {myFirstname, myLastname} = person;
console.log(myFirstname, myLastname);

const person1 = new Person('Sofia', 'Roller Derby');
person1.greet();
