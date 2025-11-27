import { initSockets } from "./socket.js";
import { events } from "./events.js";

export const logIn = (nickname) => {
  const socket = io("/");
  console.log(nickname)
  socket.emit(events.setNickname, { nickname });
  console.log(`login nickname, ${nickname}`)
  initSockets(socket, nickname);
};
export const handleFormSubmit = (e) => {
  console.log("submit1");
  e.preventDefault;
  const loginForm = document.getElementById("jsLogin");
  const input = loginForm.querySelector("input");
  localStorage.setItem("nickname", input.value);
  input.value = "";
  body.className = LOGGED_IN;
  logIn(input.value);
};
