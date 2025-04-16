require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Pickit API' });
});

// Routes will be added here
// app.use('/api/auth', require('./routes/auth.routes'));
// app.use('/api/users', require('./routes/user.routes'));
// app.use('/api/products', require('./routes/product.routes'));
// app.use('/api/orders', require('./routes/order.routes'));
// app.use('/api/sellers', require('./routes/seller.routes'));
// app.use('/api/riders', require('./routes/rider.routes'));
// app.use('/api/admin', require('./routes/admin.routes'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
