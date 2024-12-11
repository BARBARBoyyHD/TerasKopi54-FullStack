require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const cookieParser = require("cookie-parser");
const authUser = require("./src/middleware/authUser")
const refreshToken = require("./src/middleware/refreshTokenValidate")
const csrfValidate = require("./src/middleware/csrfValidate")
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 5 requests per windowMs
  message: (req, res) => `Too many requests from this IP: ${req.ip}, please try again later.`,
  standardHeaders: true, // Correct spelling
  legacyHeaders: false,  // Correct spelling
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
app.use(cors({
  credentials:true,
  origin:"http://localhost:3000",
}));
app.use(limiter)
app.use(helmet());
app.use(express.json({ limit: '10kb' })); // Limit to 10KB
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(express.static("uploads"));
app.use(cookieParser());
app.set('trust proxy', 1);

// login cashier section

app.post("/api/register/users",require("./src/routes/RegisterCashierRoutes"));

// User login endpoint
app.post("/api/login/users", loginLimiter,require("./src/routes/loginCashierRoutes"));

// -----------------------------------------------------------------------
app.get("/api/test",(req,res)=>{
  res.json({
    message:"asdasdasdas"
  })
})
// inventory section
// get single inventory item
app.get("/api/item/inventory/:id",authUser,refreshToken,csrfValidate,require("./src/routes/getSingleInventoryRoutes"));

// get all inventory items
app.get("/api/all/item/inventory",authUser,refreshToken,csrfValidate,require("./src/routes/AllInventoryItemsRoutes"));

// delete item inventory
app.delete("/api/delete/inventory/:id",authUser,refreshToken,csrfValidate,require("./src/routes/deleteInventoryRoutes"));

// edit inventory
app.put("/api/update/inventory/:id",authUser,refreshToken,csrfValidate,require("./src/routes/updateInventoryRoutes"));

// add item inventory
app.post("/api/add/item/inventory",authUser,refreshToken,csrfValidate,require("./src/routes/addItemInventoryRoutes"));

//----------------------------------------------------------------------------------------

// prodcut section

// get single product
app.get("/api/products/:id", authUser,refreshToken,require("./src/routes/getSingleProductsRoutes"));

// get all products
app.get("/api/all/products",authUser,refreshToken,csrfValidate,require("./src/routes/getAllProductsRoute"));

// delete product
app.delete("/api/delete/product/:id",authUser,refreshToken,csrfValidate,require("./src/routes/deleteProductsRoutes"));

// edit product
app.put("/api/update/products/:id",upload.single("image"),authUser,refreshToken,csrfValidate,require("./src/routes/updateProductsRoutes"));

// Add product with image
app.post("/api/add/product",upload.single("image"),authUser,refreshToken,csrfValidate,require("./src/routes/addProductsRoutes"));

// ---------------------------------------------------------------------------------------- //

// edit cafe branch
app.put("/api/update/cafe/branch/:id",authUser,refreshToken,csrfValidate,require("./src/routes/updateCafeBranchRoutes"));

// delete cafe branch
app.delete("/api/delete/cafe/branch/:id",authUser,refreshToken,csrfValidate,require("./src/routes/deleteCafeBranchRoutes"));

// add cafe branch
app.post("/api/add/cafe/branch",authUser,refreshToken,csrfValidate, require("./src/routes/addCafeBranchRoutes"));

// get all cafe branch
app.get("/api/cafe-branch",authUser,refreshToken,csrfValidate, require("./src/routes/getAllCafeBranchRoutes"));
// get sinlge cafe branch
app.get("/api/cafe-branch/:id",authUser,refreshToken,csrfValidate,require("./src/routes/getSingleCafeBranchRoutes"));

// ----------------------------------------------------------------------------------------- //

// orders section

// Get all orders with their items
app.post("/api/add/order",authUser,refreshToken,csrfValidate, require("./src/routes/addOrderRoutes"));

// get all orders
app.get("/api/all/orders", authUser,refreshToken,csrfValidate,require("./src/routes/getAllOrdersRoutes"));

// ------------------------------------------------------------------------------------------ //

app.get("/api/user/logout",authUser,refreshToken,csrfValidate,require("./src/routes/userLogoutRoutes"))

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
