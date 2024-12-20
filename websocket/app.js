require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const port = process.env.PORT;

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log(`Client Connected: ${socket.id}`); // Log client connection

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log(`Client Disconnected: ${socket.id}`); // Log client disconnection
    });
});

// Define a basic route for the server
app.get("/", (req, res) => {
    res.send("Welcome to the Socket.IO server!");
});

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
