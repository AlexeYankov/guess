import { getSocket } from "./socket.js";
import { events } from "./events.js";

const renameInput = document.getElementById("jsRename");
if (renameInput) {
  renameInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newNickname = renameInput.value.trim();
      if (newNickname && newNickname.length < 15) {
        localStorage.setItem("nickname", newNickname);
        const socket = getSocket();
        socket.emit(events.renameNickname, { newNickname });
        changeName(newNickname);
        renameInput.value = "";
      }
    }
  });
}

export const changeName = (nickname) => {
  const name = document.getElementById("userName");
  name.innerText = nickname;
};
