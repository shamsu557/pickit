module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    discount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0
    },
    subtotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {
    timestamps: true,
    tableName: 'order_items',
    hooks: {
      beforeCreate: (orderItem) => {
        // Calculate subtotal
        orderItem.subtotal = (orderItem.price * orderItem.quantity) - orderItem.discount;
      },
      beforeUpdate: (orderItem) => {
        // Recalculate subtotal if quantity, price, or discount changes
        orderItem.subtotal = (orderItem.price * orderItem.quantity) - orderItem.discount;
      }
    }
  });

  return OrderItem;
};
