import { events } from "./events.js";

let sockets = [];

export const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    sockets.push({ id: socket.id, nickname, points: 0 });
    broadcast(events.newUser, { nickname });
    sendPlayerUpdate();
  });
  socket.on(events.sendMsg, ({ message }) => {
    broadcast(events.newMsg, {
      message,
      nickname: socket.nickname,
    });
  });
  socket.on(events.beginPath, ({ x, y }) => {
    broadcast(events.beganPath, {
      x,
      y,
    });
  });
  socket.on(events.strockePath, ({ x, y, color }) => {
    broadcast(events.strockedPath, {
      x,
      y,
      color,
    });
  });
  socket.on(events.fill, ({ x, y, color }) => {
    broadcast(events.filled, {
      color,
    });
  });
  socket.on(events.disconnect, () => {
    broadcast(events.disconnected, { nickname: socket.nickname });
    sockets = sockets.filter((el) => el.nickname === socket.nickname);
  });
};
