import { handleNewUser, handleDisconnect } from "./notifications.js";
import { handleNewMsg } from "./chat.js";
import { handlePlayerUpdate } from "./players.js";
import {
  handleBeganPath,
  handleBeganStrokePath,
  handleFillPath,
} from "./paint.js";

let clientSocket = null;
export const getSocket = () => clientSocket;

export const updateSocket = (socket) => {
  clientSocket = socket;
};
export const initSockets = (serverSocketConnection, nickname) => {
  const { events } = window;
  updateSocket(serverSocketConnection);
  clientSocket.on(events.newUser, ({ nickname }) => {
    handleNewUser({ nickname, color: "#4CAF50" });
  });
  clientSocket.on(events.newMsg, ({ message, nickname }) => {
    handleNewMsg({ nickname, message });
  });
  clientSocket.on(events.beganPath, ({ x, y }) => {
    handleBeganPath({ x, y });
  });
  clientSocket.on(events.strockedPath, ({ x, y, color }) => {
    console.log(color);
    handleBeganStrokePath({ x, y, color });
  });
  clientSocket.on(events.filled, ({ color }) => {
    handleFillPath({ color });
  });
  clientSocket.on(events.disconnected, ({ nickname }) => {
    handleDisconnect({ nickname, color: "#eb331bff" });
  });
  clientSocket.on(events.playerUpdate, handlePlayerUpdate);
};
