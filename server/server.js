const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const boardState = require("./boardState");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.get("/", (req, res) => {
  res.send("In-Out Board server is running");
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.emit("board:updated", boardState);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(8080, () => {
  console.log("Server listening on port 8080");
});
