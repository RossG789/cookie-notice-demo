const acceptButton = document.getElementById("accept");
const declineButton = document.getElementById("decline");
const cookieNotice = document.getElementById("cookie-notice");
const toggleThemeButton = document.getElementById("toggle-mode");

toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.cookie = "lightModeOn=true";
});

acceptButton.addEventListener("click", () => {
  document.cookie = "cookiesAccepted=true";
  cookieNotice.style.display = "none";
});

declineButton.addEventListener("click", () => {
  document.cookie = "cookiesAccepted=false";
  cookieNotice.style.display = "none";
});

const cookiesAccepted = document.cookie.includes("cookiesAccepted");
if (cookiesAccepted) {
  cookieNotice.style.display = "none";
}

const lightModeOn = document.cookie.includes("lightModeOn");
if (lightModeOn) {
  console.log("lighton");
  document.body.style.display = "block";
}
