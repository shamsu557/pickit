module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    riderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'riders',
        key: 'id'
      }
    },
    orderNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    deliveryAddress: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    deliveryFee: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.ENUM(
        'pending',
        'accepted_for_delivery',
        'confirmed',
        'out_for_delivery',
        'arrived',
        'completed',
        'cancelled'
      ),
      defaultValue: 'pending'
    },
    paymentMethod: {
      type: DataTypes.ENUM('cash_on_delivery', 'online_payment'),
      allowNull: false
    },
    paymentStatus: {
      type: DataTypes.ENUM('pending', 'paid', 'failed'),
      defaultValue: 'pending'
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    riderAcceptedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    confirmedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    outForDeliveryAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    arrivedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    completedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cancelledAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    riderCompletedStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    userCompletedStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: true,
    tableName: 'orders',
    hooks: {
      beforeCreate: (order) => {
        // Generate a unique order number
        const timestamp = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 1000);
        order.orderNumber = `ORD-${timestamp}-${randomNum}`;
      }
    }
  });

  return Order;
};
