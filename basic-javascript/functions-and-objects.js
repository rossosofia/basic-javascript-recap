// ▪ Create a javascript function that takes firstname and lastname as 2 parameters and uses console.log() to output the person's name. Check that it works and is printet correctly

function logFullName (firstName, lastName){
    console.log(firstName+' '+lastName)
}

logFullName ("Sofia", "Amoroso");


// Create a function that calculates the area of a rectangle. The function should return the result. Test that it works.

function CalculateArea( height, width){
    return height * width;
}

console.log(CalculateArea(3,6),"cm2");


// Create a function that takes speed and time as 2 parameters and calculates and returns the distance. Use the function to test that it works by using the 'log' again. Print out "You have travelled *x* km" where *x* is replaced by the result from the function.

function calculateDistance(speed, time){
    return speed*time;
}

const distance = calculateDistance(3,10);

console.log(`You have travelled ${distance} km`)


// Create an object called calculator with the name of the owner (eg. Your name) and modify your code so the 3 previous functions are attached to the object.

let calculator = {
    owner: "Sofia",

    logFullName: function (firstName, lastName){
        console.log(firstName+' '+lastName)
    },

    CalculateArea: function( height, width){
        return height * width;
    },

    calculateDistance: function (speed, time){
        return speed*time;
    }

}

console.log(calculator);
calculator.logFullName;

console.log("area: " ,calculator.CalculateArea(7,4));

const distance2= calculator.calculateDistance(60,2);
console.log("distance: ", distance2);



// ▪ Adjust your code so that you can call the functions and test that they still work.
