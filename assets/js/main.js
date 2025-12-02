import { logIn, handleFormSubmit } from "./login";
import { stopNotification } from "./notifications";
import "./chat";
import "./paint";
import "./utils";
import "./players";

const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");
const controls = document.getElementById("controls");
const canvas = document.getElementById("jsCanvas");
const notificationClose = document.getElementById("jsNotification");

const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";
const LOGGED_IN_CONTROLS = "loggedInCanvas";
const NICKNAME = "nickname";
const id = "id";
const nickname_persisted = localStorage.getItem(NICKNAME);
const id_persisted = localStorage.getItem(id);

if (nickname_persisted !== null) {
  body.className = LOGGED_IN;
  canvas.classList.add(LOGGED_IN_CONTROLS);
  controls.classList.add(LOGGED_IN_CONTROLS);
  logIn(nickname_persisted, id_persisted);
}
if (nickname_persisted === null) body.className = LOGGED_OUT;

if (loginForm) loginForm.addEventListener("submit", handleFormSubmit);
if (notificationClose) {
  notificationClose.addEventListener("click", stopNotification);
  setTimeout(() => stopNotification(), 2000);
}
