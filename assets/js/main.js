import { logIn, handleFormSubmit } from "./login";
import { stopNotification } from "./notifications";

const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");
const notificationClose = document.getElementById("jsNotification");

const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";
const NICKNAME = "nickname";
const nickname_persisted = localStorage.getItem(NICKNAME);

if (nickname_persisted !== null) {
  body.className = LOGGED_IN;
  logIn(nickname_persisted);
}
if (nickname_persisted === null) body.className = LOGGED_OUT;

if (loginForm) loginForm.addEventListener("submit", handleFormSubmit);
if (notificationClose) {
  notificationClose.addEventListener("click", stopNotification);
  console.log("added close event");
  setTimeout(()=>stopNotification(), 2000)
}
