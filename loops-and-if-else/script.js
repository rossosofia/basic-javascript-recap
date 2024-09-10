import Book from "./books.js"

console.log("Hello world");

const numbers = [4, 7, 9, 1.2, 5, 7];
let sum = 0;

for (let x of numbers){
    sum = sum + x;
    console.log("Hello from the loop");
}

console.log("the number is ", sum);

// -------- EXERCISE 1 -------- 

const array1 = ['Peter', 7, 'Marianne', true, 'Helle', 8];

// My solution:
// array1.forEach(whichType);
// function whichType(x){
//     console.log(x + " is a " + typeof x)
// }

// Class solution:
array1.forEach(x => {
    console.log(`${x} is a ${typeof x}`);
});


// -------- EXERCISE 2 -------- 

const books = [
    new Book("La Casa sulla Collina", "Cesare Pavese"),
    new Book("Lessico Familiare", "Natalia Ginzburg"),
    new Book("The Trouble with Happiness", "Tove Ditlevsen"),
    new Book("Uomini e no", "Elio Vittorini"),
    new Book("Lettere dal Carcere", "Antonio Gramsci")
]

books.forEach(x =>{
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.textContent = `${x.author}, ${x.title}`
    ul.appendChild(li);
})

// --- example in class ---

let time = new Date().getHours();
let greeting = "";
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good afternoon";
} else {
    greeting = "I have kids, I am already asleep";
}

console.log(greeting);

const email = 'sos@cphbusiness.dk';
const firstName = "Sofia";
const lastName = "Amoroso"

if (email === 'sos@cphbusiness.dk' ||
    firstName === 'Sofia' && lastName === 'Amoroso'
) {
    console.log('Welcome!');
}

const age = 18;
let alcohol = age >= 18;
console.log(alcohol);

// --- EXERCISE ---

// Create a function, findLargest, that takes 4 numbers as 4 parameters and returns
// the largest of the 4 numbers.


const myNumbers = [3, 6, 8, 19]
function findLargest(a, b, c, d){
    let largest = Math.max(a, b, c, d);
    console.log(`largest is: ${largest}`);
}

// note to myself: I need the spread operator .... because I'm taking the elements from an array but I need them as individual arguments
findLargest(...myNumbers);

// ▪ Create a function that takes 3 numbers as 3 parameters. The first parameter is the
// number to check. The 2nd and 3rd parameter is a range (from and to). If the first
// parameter is within the range of the range it should return true and false if not.

function isInRange(x, y, z){
    if(x >= y && x <= z){
        return true
    } else {
        return false
    }
}

console.log(isInRange(6, 6, 8));
