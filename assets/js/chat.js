import { getSocket } from "./socket";

const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");

const appendMsg = (text, nickname) => {
  const li = document.createElement("li");
  li.innerHTML = `<span class="author ${
    nickname === "You" ? "self" : "someone"
  }">${nickname}:</span>  ${text}`;
  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight;
};

const handleSendMsg = (e) => {
  e.preventDefault();
  const currentSocket = getSocket();
  const input = sendMsg.querySelector("input");
  const { value } = input;
  currentSocket.emit(window.events.sendMsg, { message: value });
  input.value = "";
  const nickname = currentSocket.nickname ? currentSocket.nickname : "You";
  appendMsg(value, nickname);
};

export const handleNewMsg = ({ nickname, message }) => {
  appendMsg(message, nickname);
};

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
