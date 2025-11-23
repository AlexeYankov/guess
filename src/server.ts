import express from "express";

import path from "node:path";
import { Server } from "socket.io";
import { fileURLToPath } from "node:url";
import { createServer } from "node:http";

//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 4000;
const app = express();
const http = createServer(app);
const io = new Server(http, {
  cors: {
    origin: `http://localhost:${PORT}`,
    // methods: ["GET"],
  },
});

// "dev:server": "nodemon --exec babel-node src/server "

const staticViewsFilesDirectory = path.join(__dirname, "views");
const staticFilesDirectory = path.join(__dirname, "static");

app.set("view engine", "pug");
app.set("views", staticViewsFilesDirectory);
// app.set("static", staticFilesDirectory);
app.use(express.static(staticViewsFilesDirectory));
app.use(express.static(staticFilesDirectory));
app.get("/", (req, res) => res.render("home"));

const handleListening = () => console.log("server greetings");

io.on("connection", function (socket: any) {
  console.log("Client connected to the WebSocket");
  console.log(socket);
});

http.listen(PORT, handleListening);
