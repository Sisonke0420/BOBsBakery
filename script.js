// Login/password handling: wait for DOM, guard missing elements, and use
// a single password constant. Also allow Enter key to submit.
document.addEventListener("DOMContentLoaded", () => {
  const PASSWORD = "bobs123";
  const loginBtn = document.getElementById("login-button");
  const pwInput = document.getElementById("password-input");

  function checkPassword(event) {
    if (event && typeof event.preventDefault === 'function') event.preventDefault();
    const userInput = pwInput ? pwInput.value.trim() : "";
    if (userInput === PASSWORD) {
      window.location.href = "Website for Bobs Bakery/home.html";
    } else {
      alert("Access denied! Try again.");
    }
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", checkPassword);
  }

  if (pwInput) {
    pwInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") checkPassword(e);
    });
  }
});