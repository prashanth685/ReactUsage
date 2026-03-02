// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  // Send random value immediately
  const randomValue = Math.floor(Math.random() * 100);
  socket.emit("randomValue", randomValue);

  // Or send random value every 5 seconds
  const interval = setInterval(() => {
    const randomValue = Math.floor(Math.random() * 100);
    socket.emit("randomValue", randomValue);
  }, 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
    clearInterval(interval);
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
