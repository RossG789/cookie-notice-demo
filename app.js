const acceptButton = document.getElementById("accept");
const declineButton = document.getElementById("decline");
const cookieNotice = document.getElementById("cookie-notice");

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
