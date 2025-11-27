import { handleNewUser, handleDisconnect } from "./notifications.js";

let socket = null;
const getSocket = () => window.socket;

export const updateSocket = (sockets) => {
  socket = sockets;
};
export const initSockets = (sockett, nickname) => {
  console.log(`current nickname, ${nickname}`);
  const { events } = window;
  updateSocket(sockett);
  // socket.on(events.newUser, handleNewUser({ nickname }));
  socket.on(events.newUser, ({ nickname }) => {
    console.log("client new user", nickname);
    handleNewUser({ nickname, color: "#4CAF50" });
  });
  socket.on(events.disconnected, ({ nickname }) => {
    handleDisconnect({ nickname, color: "#eb331bff" });
  });
};
