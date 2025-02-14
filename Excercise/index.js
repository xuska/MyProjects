

// let purchase = "Something went wrong try again"

// let errorElement = document.getElementById('error')
// console.log(purchase)

// errorElement.textContent = purchase






/*let purchase = "Something went wrong, try again";

let errorElement = document.getElementById('error');

console.log(purchase); // Logs the message to the console

// If you want to display the error message in the HTML element:
errorElement.textContent = purchase;*/


let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong, please try again"
}