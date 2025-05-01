
//CHANGING THE COLOR OF THE TEXT ON MOUSEOVER AND MOUSEOUT


const myName =document.querySelector("#name"); 


// Change text color on mouseover
myName.addEventListener("mouseover", () => {
    myName.style.color = "red"; // Change to your desired hover color
});

// Revert text color on mouseout
myName.addEventListener("mouseout", () => {
    myName.style.color = ""; // Revert to the initial color
});


// change the text of the button when clicked
const myQuestion = document.querySelector("#question");

myQuestion.addEventListener("click" , () =>{
    myQuestion.innerText = " My name is Usan!";
    myQuestion.style.color = "yellow";

});
    

// Creating a slideshow
const images = ["./images/meou.jpg", "./images/meou1.jpg", "./images/meou2.jpg","./images/meou3.jpg","./images/meou4.jpg"]; // Add your image paths here
let currentIndex = 0;

const slide = document.getElementById("slide");

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
  slide.src = images[currentIndex];
}

// Change the image every 3 seconds
setInterval(showNextImage, 3000);

// Creating a text animation

const animatedText = document.getElementById("animatedText");
const text = "Meou , my cat! Hope to see you again."; // The text to animate
let index = 0; // Start at the first character

function animateText() {
  if (index < text.length) {
    animatedText.textContent += text[index]; // Add the next character
    index++; // Move to the next character
  } else {
    clearInterval(animationInterval); // Stop the animation when done
  }
}

// Call animateText every 70ms
const animationInterval = setInterval(animateText, 70);

// FORM VALIDATION

const form = document.getElementById("myForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const emailFeedback = document.getElementById("emailFeedback");
const passwordFeedback = document.getElementById("passwordFeedback");

form.addEventListener("submit", (e) => {
  let isValid = true;

  // Email validation
  if (!email.value.includes("@")) {
    emailError.textContent = "Please enter a valid email.";
    emailError.style.display = "block";
    isValid = false;
    emailFeedback.textContent = "Valid email format.";
    emailFeedback.className = "feedback success";

  } else {
    emailError.style.display = "none";
    emailFeedback.textContent = "Invalid email format. Please include '@'.";
    emailFeedback.className = "feedback error";
  }

  // Password validation
  if (password.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    passwordError.style.display = "block";
    isValid = false;
    passwordFeedback.textContent = "Password length is sufficient.";
    passwordFeedback.className = "feedback success";

  } else {
    passwordError.style.display = "none";
    passwordFeedback.textContent = `Password must be at least 8 characters. (${password.value.length}/8)`;
    passwordFeedback.className = "feedback error";
  }

  if (!isValid) {
    e.preventDefault(); // Prevent form submission if validation fails
  }
});





        

    

  
