

function validateForm() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  let valid = true;

  // Clear previous errors
  email.classList.remove("error");
  password.classList.remove("error");
  emailError.textContent = "";
  passwordError.textContent = "";

  // Email validation
  if (!email.value.trim()) {
    emailError.textContent = "Email is required.";
    email.classList.add("error");
    valid = false;
  } else if (!validateEmail(email.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    email.classList.add("error");
    valid = false;
  }

  // Password validation
  if (!password.value.trim()) {
    passwordError.textContent = "Password is required.";
    password.classList.add("error");
    valid = false;
  } else if (password.value !== "WRQ1211AS") {
    passwordError.textContent = "Incorrect password.";
    password.classList.add("error");
    valid = false;
  }

  if (valid) {
    window.location.href = "Home.html"; // Navigate to home.html
  }

  return false; // Prevent actual form submission
}

// Helper function to validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}


function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(inputElement, message) {
  inputElement.classList.add("error");
  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error-message");
  errorSpan.innerText = message;
  inputElement.parentNode.appendChild(errorSpan);
}

function clearErrors() {
  const inputs = document.querySelectorAll(".form-control");
  inputs.forEach(input => {
    input.classList.remove("error");
  });

  const errors = document.querySelectorAll(".error-message");
  errors.forEach(error => error.remove());
}



  
      // Initialize sidenav
      document.addEventListener("DOMContentLoaded", function () {
        var elems = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elems);
      });

      // Smooth scroll for internal links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 64,
              behavior: "smooth",
            });
          }
          const sidenav = document.querySelector(".sidenav");
          const instance = M.Sidenav.getInstance(sidenav);
          if (instance) instance.close();
        });
      });

      // Handle logout click
      document
        .querySelector(".btn-logout")
        .addEventListener("click", function () {
          alert("You have been logged out.");
          // Redirect or perform logout logic here
        });
