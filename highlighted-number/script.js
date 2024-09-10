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
    div.classList.add(x % 2 === 0 ? "even" : "odd"); //note to myself: remember to use the ternary operator >:(
})


container.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("number")) {
        changeColour(e.target);  // Only change color for clicked numbers
    }
});


// Add an event listener to highlight the number when clicked

let numbersDivs = document.getElementsByClassName("number");
console.log(numbersDivs);

// note to myself: you can't do forEach on a HTML collection, you need to convert that into an array
Array.from(numbersDivs).forEach(div => {
    div.addEventListener("click", () => changeColour(div));  
});


// Remove highlight from all numbers
// Add highlight to the clicked number

function changeColour(clickedDiv) {
    const highlighted = container.querySelector(".highlight");
    if (highlighted) {
        highlighted.classList.remove("highlight");
    }
    clickedDiv.classList.add("highlight");
}
    

    

