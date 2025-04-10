
//Theme Toggeling
function toggleLightTheme(){
    console.log('Button Clicked!')
    document.body.classList.toggle('light-theme')
}
const togglethemeButton = document.getElementById('theme-toggle') //get button
togglethemeButton.addEventListener('click', toggleLightTheme) //add action listener to button

//Form Validation
document.getElementById("contactForm").addEventListener("submit", (e)=> {
e.preventDefault();
const name = document.getElementById("name").value.trim();
const message = document.getElementById("message").value.trim();
const response = document.getElementById("response");

if (name === "" || message === "") {
alert("Please fill out all fields");
} else {
response.textContent = `Thanks, ${name}.We'll get back to you soon!`;
response.style.display = 'block';
e.target.reset();
}
});

