const sequelize = require('../config/db.config');
const { DataTypes } = require('sequelize');

// Import models
const User = require('./user.model')(sequelize, DataTypes);
const Product = require('./product.model')(sequelize, DataTypes);
const Category = require('./category.model')(sequelize, DataTypes);
const Order = require('./order.model')(sequelize, DataTypes);
const OrderItem = require('./orderItem.model')(sequelize, DataTypes);
const Payment = require('./payment.model')(sequelize, DataTypes);
const Seller = require('./seller.model')(sequelize, DataTypes);
const Rider = require('./rider.model')(sequelize, DataTypes);
const OtpVerification = require('./otpVerification.model')(sequelize, DataTypes);
const Admin = require('./admin.model')(sequelize, DataTypes);

// Define associations
// Category - Product (One-to-Many)
Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

// Seller - Product (One-to-Many)
Seller.hasMany(Product, { foreignKey: 'sellerId' });
Product.belongsTo(Seller, { foreignKey: 'sellerId' });

// User - Order (One-to-Many)
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

// Rider - Order (One-to-Many)
Rider.hasMany(Order, { foreignKey: 'riderId' });
Order.belongsTo(Rider, { foreignKey: 'riderId' });

// Order - OrderItem (One-to-Many)
Order.hasMany(OrderItem, { foreignKey: 'orderId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });

// Product - OrderItem (One-to-Many)
Product.hasMany(OrderItem, { foreignKey: 'productId' });
OrderItem.belongsTo(Product, { foreignKey: 'productId' });

// Order - Payment (One-to-One)
Order.hasOne(Payment, { foreignKey: 'orderId' });
Payment.belongsTo(Order, { foreignKey: 'orderId' });

// User - OtpVerification (One-to-Many)
User.hasMany(OtpVerification, { foreignKey: 'userId' });
OtpVerification.belongsTo(User, { foreignKey: 'userId' });

// Sync all models with database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing models:', error);
  }
};

module.exports = {
  sequelize,
  syncDatabase,
  User,
  Product,
  Category,
  Order,
  OrderItem,
  Payment,
  Seller,
  Rider,
  OtpVerification,
  Admin
};
