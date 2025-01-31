const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const authRoute = require('./routes/authRoute');
const productRoute = require('./routes/productRoute');
const cartRoute = require('./routes/cartRoute');  // Add cart route
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To handle JSON requests

// Routes
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);  // Add cart route

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
