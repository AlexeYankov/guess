import { initSockets } from "./socket.js";
import { events } from "./events.js";
import { changeName } from "./utils.js";

export const logIn = (nickname) => {
  const socket = io("/");
  changeName(nickname);
  initSockets(socket, nickname);
  socket.emit(events.setNickname, { nickname });
};
export const handleFormSubmit = (e) => {
  e.preventDefault;
  const loginForm = document.getElementById("jsLogin");
  const input = loginForm.querySelector("input");
  if (input.value.length > 15) return;
  localStorage.setItem("nickname", input.value);
  input.value = "";
  body.className = LOGGED_IN;
  logIn(input.value);
};
