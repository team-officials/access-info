// Login and validation logic
const accessCodeInput = document.getElementById('accessCode');
const errorMessage = document.getElementById('error-message');
const loginButton = document.getElementById('login-button');
const modal = document.getElementById('modal');
const loadingText = document.getElementById('loading-text');

loginButton.addEventListener('click', validateAccessCode);

function validateAccessCode() {
  const accessCode = accessCodeInput.value.trim();
  const correctAccessCode = 'WQU26638837';

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

// Optional: Materialize Sidenav Initialization (only include if you're using Materialize CSS)
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  if (typeof M !== 'undefined' && M.Sidenav) {
    M.Sidenav.init(elems);
  }
});

// Optional: Smooth scroll for internal links
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
    if (typeof M !== 'undefined' && M.Sidenav) {
      const instance = M.Sidenav.getInstance(sidenav);
      if (instance) instance.close();
    }
  });
});

// Optional: Logout Button Handler
const logoutBtn = document.querySelector(".btn-logout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    alert("You have been logged out.");
    // Add actual logout logic here if needed
  });
}
