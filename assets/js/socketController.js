import { events } from "./events.js";

export const socketController = (socket) => {
  // const broadcast = (event, data) => {
  //   socket.broadcast.emit(event, data);
  //   console.log("data");
  //   console.log(event);
  //   console.log(data);
  // };
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    console.log("broadcast new user", nickname);
    socket.broadcast.emit(events.newUser, { nickname });
  });

  socket.on(events.disconnect, () => {
    socket.broadcast.emit(events.disconnected, { nickname: socket.nickname });
    console.log("see you!", socket.nickname);
  });
};
