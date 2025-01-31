const dotenv = require('dotenv');
dotenv.config();

// VodaPay API keys and configuration
const paymentConfig = {
  apiKey: process.env.VODAPAY_API_KEY,
  apiSecret: process.env.VODAPAY_API_SECRET,
};

module.exports = paymentConfig;
