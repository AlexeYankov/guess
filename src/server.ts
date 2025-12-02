import express from "express";

import path from "node:path";
import { Server } from "socket.io";
import { fileURLToPath } from "node:url";
import { createServer } from "node:http";
import { events } from "../assets/js/events.js";
import { socketController } from "../assets/js/socketController.js";

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

const staticViewsFilesDirectory = path.join(__dirname, "views");
const staticFilesDirectory = path.join(__dirname, "static");

app.set("view engine", "pug");
app.set("views", staticViewsFilesDirectory);
app.use(express.static(staticFilesDirectory));
app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);

const handleListening = () => console.log("server greetings");

io.on("connection", function (socket: any) {
  socketController(socket, io);
});

http.listen(PORT, handleListening);
