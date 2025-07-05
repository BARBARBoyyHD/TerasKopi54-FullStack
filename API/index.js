require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const cookieParser = require("cookie-parser");
const authUser = require("./src/middleware/authUser");
const refreshToken = require("./src/middleware/refreshTokenValidate");
const csrfValidate = require("./src/middleware/csrfValidate");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const authRole = require("./src/middleware/AuthRole");
const { suppressDeprecationWarnings } = require("moment");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 5 requests per windowMs
  message: (req, res) =>
    `Too many requests from this IP: ${req.ip}, please try again later.`,
  standardHeaders: true, // Correct spelling
  legacyHeaders: false, // Correct spelling
});

const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes for login attempts
  max: 100,
  message: "Too many login attempts, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});
// Define storage for the images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Folder where images will be stored
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // Append timestamp to avoid filename collisions
  },
});

const upload = multer({ storage: storage });

const port = process.env.PORT;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow cookies and authorization headers
  })
);

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(express.json({ limit: "10kb" })); // Limit to 10KB
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.static("uploads"));
app.use(cookieParser());
app.set("trust proxy", 1);

// login cashier section

app.post(
  "/api/register/users",
  require("./src/routes/users/RegisterCashierRoutes")
);

// User login endpoint
app.post(
  "/api/login/users",
  loginLimiter,
  require("./src/routes/users/loginCashierRoutes")
);

// update user profile

app.put(
  "/api/user/profile/update",
  upload.single("image"),
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/users/updateUserProfileRoutes")
);

// -----------------------------------------------------------------------
app.get("/api/test", (req, res) => {
  res.json({
    message: "asdasdasdas",
  });
});

// inventory section
// get single inventory item
app.get(
  "/api/item/inventory/:id",
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/inventory/getSingleInventoryRoutes")
);

// get all inventory items
app.get(
  "/api/all/item/inventory",
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/inventory/AllInventoryItemsRoutes")
);

// delete item inventory
app.delete(
  "/api/delete/inventory/:id",
  authRole(["Admin", "Manager"]),
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/inventory/deleteInventoryRoutes")
);

// edit inventory
app.put(
  "/api/update/inventory/:id",
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/inventory/updateInventoryRoutes")
);

// add item inventory
app.post(
  "/api/add/item/inventory",
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/inventory/addItemInventoryRoutes")
);

//----------------------------------------------------------------------------------------

// product section

// get single product
app.get(
  "/api/products/:id",
  authUser,
  refreshToken,
  require("./src/routes/product/getSingleProductsRoutes")
);

// get all products
app.get(
  "/api/all/products",
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/product/getAllProductsRoute")
);

// delete product
app.delete(
  "/api/delete/product/:id",
  authRole(["Admin", "Manager"]),
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/product/deleteProductsRoutes")
);

// edit product
app.put(
  "/api/update/products/:id",
  upload.single("image"),
  authRole(["Admin", "Manager"]),
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/product/updateProductsRoutes")
);

// Add product with image
app.post(
  "/api/add/product",
  upload.single("image"),
  authRole(["Admin", "Manager"]),
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/product/addProductsRoutes")
);

// ---------------------------------------------------------------------------------------- //

// edit cafe branch
app.put(
  "/api/update/cafe/branch/:id",
  authRole(["Admin", "Manager"]),
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/updateCafeBranchRoutes")
);

// delete cafe branch
app.delete(
  "/api/delete/cafe/branch/:id",
  authRole(["Admin", "Manager"]),
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/deleteCafeBranchRoutes")
);

// add cafe branch
app.post(
  "/api/add/cafe/branch",
  authRole(["Admin", "Manager"]),
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/addCafeBranchRoutes")
);

// get all cafe branch
app.get(
  "/api/cafe-branch",
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/getAllCafeBranchRoutes")
);
// get sinlge cafe branch
app.get(
  "/api/cafe-branch/:id",
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/getSingleCafeBranchRoutes")
);

// ----------------------------------------------------------------------------------------- //

// orders section

// Get all orders with their items
app.post(
  "/api/add/order",
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/orders/addOrderRoutes")
);

// get all orders
app.get(
  "/api/all/orders",
  authRole(["Admin", "Manager"]),
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/orders/getAllOrdersRoutes")
);

// ------------------------------------------------------------------------------------------ //

// cart

app.get(
  "/api/user/profile",
  authUser,
  refreshToken,
  csrfValidate,
  require("./src/routes/users/getUserProfileRoutes")
);

app.get("/api/cart/item", require("./src/routes/orders/getCartRoutes"));
app.post("/api/add/to/cart", require("./src/routes/orders/addToCartRoutes"));

app.get(
  "/api/user/logout",
  refreshToken,
  csrfValidate,
  require("./src/routes/users/userLogoutRoutes")
);

app.get("/api/auth/user", authUser, refreshToken, csrfValidate, (req, res) => {
  res.json({
    message: "Access Passed",
    user_role: req.user.role,
  });
});

app.get(
  "/api/auth/dashboard",
  authRole(["Admin", "Manager"]),
  authUser,
  refreshToken,
  csrfValidate,
  (req, res) => {
    res.json({
      user_role: req.user.role,
    });
  }
);
// Dashboard
app.get("/api/salesReport",authRole(["Admin", "Manager"]), require("./src/routes/dashboard/SalesReport"));

//logs 
app.get("/api/logs",authUser,require("./src/routes/logs/GetAllLogs"))

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
