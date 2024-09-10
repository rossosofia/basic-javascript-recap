// Get the container element
const container = document.getElementById("number-list");

const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

// Loop through numbers from 1 to 20
// Create a new div element for each number
// Append the new div to the container

numbers.forEach(x =>{
    let div = document.createElement("div");
    div.textContent = x;
    container.appendChild(div);
    div.classList.add("number");
    isEven(x, div);
})

// Check if the number is even or odd and apply the appropriate class

function isEven(x, div){
    if (x % 2 == 0){
        div.classList.add("even")
    } else {
        div.classList.add("odd")
    }
}

// Add an event listener to highlight the number when clicked

let numbersDivs = document.getElementsByClassName("number");
console.log(numbersDivs);

// note to myself: you can't do forEach on a HTML collection, you need to convert that into an array
Array.from(numbersDivs).forEach(div => {
    div.addEventListener("click", () => changeColour(div));  
});


// Remove highlight from all numbers
// Add highlight to the clicked number

function changeColour(div) {
    if( div.classList.contains("highlight")){
        div.classList.remove("highlight");  
    } else {
        div.classList.add("highlight"); 
    }
}

    

    

