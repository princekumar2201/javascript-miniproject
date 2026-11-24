// Select the first button element from the HTML
let btn = document.querySelector("button");

// Select the unordered list (<ul>) from the HTML
let ul = document.querySelector("ul");

// Select the input field from the HTML
let inp = document.querySelector("input");


// Add a click event listener to the main button
// This function runs whenever we click the main button
btn.addEventListener("click", function () {

    // Create a new list item (<li>) dynamically
    let item = document.createElement("li");

    // Set the text of the list item to whatever the user typed
    item.innerText = inp.value;

    // Create a new button dynamically for deleting the list item
    let delBtn = document.createElement("button");

    // Set the text inside the delete button
    delBtn.innerText = "delete";

    // Add a CSS class named "delete" to the delete button
    // We can use this class to style the button using CSS
    delBtn.classList.add("delete");

    // Add the delete button inside the list item
    item.appendChild(delBtn);

    // Add the complete list item (with text and delete button)
    // inside the unordered list (<ul>)
    ul.appendChild(item);

    // Clear the input field after adding the item
    inp.value = "";
});


// Add a click event listener to the entire unordered list
// This is called EVENT DELEGATION
// Instead of adding a separate click listener to every delete button,
// we listen for clicks on the parent <ul>
ul.addEventListener("click", function(event) {

    // Check whether the clicked element is a button
    if (event.target.nodeName == "BUTTON") {

        // Get the parent element of the clicked button
        // In our case, it is the <li> containing the item
        let listItem = event.target.parentElement;

        // Remove the entire list item from the HTML
        listItem.remove();

        // Print "deleted" in the browser console
        console.log("deleted");
    }
});