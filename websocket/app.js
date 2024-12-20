require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const CountItemSold = require("./controller/CountItemSoldController");
const sumAllProduct = require("./controller/SumAllProduct");
const sumTotalRevenue = require("./controller/SumTotalRevenue");
const MonthlyRevenue = require("./controller/MonthlyRevenue");
const calculateABS = require("./controller/CalculateABS");
const getAllOrders = require("./controller/getAllOrders");
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("views"));

// Create HTTP and WebSocket servers
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Handle basic WebSocket logic
io.on("connection", (socket) => {
  console.log(`Client Connected: ${socket.id}`);
  socket.emit("text", "hello");

  socket.on("disconnect", () => {
    console.log(`Client Disconnected: ${socket.id}`);
  });
});

// Register the CountItemSold WebSocket handler
CountItemSold(io);
sumAllProduct(io);
sumTotalRevenue(io);
MonthlyRevenue(io);
calculateABS(io);
getAllOrders(io);
// Define a basic route for the server
app.get("/", (req, res) => {
  res.send("Welcome to the Socket.IO server!");
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
