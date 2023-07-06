"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
io.on("connection", (socket) => {
    console.log("A user connected");
    // Handle client events and emit responses
    // Example:
    socket.on("chatMessage", (message) => {
        io.emit("chatMessage", message);
    });
    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});
const port = 3000; // Choose your desired port number
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
