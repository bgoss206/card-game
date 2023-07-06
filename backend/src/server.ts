import express, { Application } from "express";
import http from "http";
import { Server, Socket } from "socket.io";

const app: Application = express();
const server: http.Server = http.createServer(app);
const io: Server = new Server(server);

io.on("connection", (socket: Socket) => {
  console.log("A user connected");

  // Handle client events and emit responses
  // Example:
  socket.on("chatMessage", (message: string) => {
    io.emit("chatMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const port: number = 3000; // Choose your desired port number

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
