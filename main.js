const accessCodeInput = document.getElementById('accessCode');
const errorMessage = document.getElementById('error-message');
const loginButton = document.getElementById('login-button');
const modal = document.getElementById('modal');
const loadingText = document.getElementById('loading-text');

loginButton.addEventListener('click', validateAccessCode);

function validateAccessCode() {
  const accessCode = accessCodeInput.value.trim();
  const correctAccessCode = 'WQU26638837GHTQFGS';

  if (accessCode === correctAccessCode) {
    accessCodeInput.style.border = '1px solid green';
    errorMessage.style.display = 'none';
    loginButton.disabled = true;
    modal.style.display = 'flex';

    let loadingProgress = 0;
    const loadingInterval = setInterval(() => {
      loadingProgress += 4;
      loadingText.innerText = `Loading... ${loadingProgress}%`;

      if (loadingProgress >= 100) {
        clearInterval(loadingInterval);
        setTimeout(() => {
          window.location.href = '/all-social-media-info/home/Home.html';
        }, 1000);
      }
    }, 250);
  } else {
    accessCodeInput.style.border = '1px solid red';
    errorMessage.style.display = 'block';
  }
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
