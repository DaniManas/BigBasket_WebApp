//# Contribution by Manas Dani - madani
window.addEventListener("pageshow", () => {
  const btn = document.getElementById("loginBtn");
  const text = document.getElementById("btnText");
  const spinner = document.getElementById("spinner");

  // Reset the button state
  if (btn && text && spinner) {
    btn.disabled = false;
    text.innerText = "Login";
    spinner.classList.add("hidden");
  }

  // Only attach once
  const form = document.querySelector("form");
  if (form && !form.dataset.listenerAttached) {
    form.addEventListener("submit", () => {
      btn.disabled = true;
      text.innerText = "Logging in...";
      spinner.classList.remove("hidden");
    });
    form.dataset.listenerAttached = true;
  }
});
