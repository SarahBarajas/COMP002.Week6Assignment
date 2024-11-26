// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

// Select the form and input elements from the HTML
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const bgColorInput = document.querySelector('#bgcolor');
const fgColorInput = document.querySelector('#fgcolor');

// Function to apply the saved preferences from localStorage
function applyPreferences() {
    const name = localStorage.getItem('name'); // Get the stored name
    const bgColor = localStorage.getItem('bgcolor'); // Get the stored background color
    const fgColor = localStorage.getItem('fgcolor'); // Get the stored foreground color

    if (name) { // If a name is saved
        document.querySelector('#greeting').textContent = `Hello, ${name}!`;
    }
    if (bgColor) { // If a background color is saved
        document.body.style.backgroundColor == bgColor; // Set the body background to the saved color
    }

    if (fgColor) { // If a foreground color is saved 
        document.body.style.color = fgColor;// Set the text color to the saved color
    }
}
// Add an event listener for the form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting in the default way

    const name = nameInput.value; // Get the current value of the name input
    const bgColor = bgColorInput.value; // Get the current value of the background color input
    const fgColor = fgColorInput.value; // Get the current value of the foreground color input

    // Save the current values in localStorage
    localStorage.setItem('name', name); // Save the name
    localStorage.setItem('bgcolor', bgColor); // Save the background color
    localStorage.setItem('fgcolor', fgColor); // Save the foreground color


    // Apply the saved preferences immediately
    applyPreferences(); // Call the function to apply preferences
    