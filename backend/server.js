const express = require('express');
const cors = require('cors'); // ✅ Import CORS
const dotenv = require('dotenv');
const connectdb = require('./config/dbConnection.js');
const roomRoutes = require('./routes/roomRoutes.js');
const roomBookingRoutes = require('./routes/roomBookingRoutes.js');
const errorHandler = require("./middleware/errorHandler"); // ✅ Corrected import

dotenv.config();
connectdb();

const app = express();

// ✅ Enable CORS
app.use(cors({
  origin: "*", // for dev only, open to all origins
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use("/api/rooms", roomRoutes);
app.use("/api/roombooking", roomBookingRoutes);

// Global error handler
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});