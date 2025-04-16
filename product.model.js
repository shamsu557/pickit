module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING, // URL to product image
      allowNull: true
    },
    stockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sellers',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive', 'out_of_stock'),
      defaultValue: 'active'
    },
    featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    discount: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
      defaultValue: 0
    },
    weight: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: true
    },
    dimensions: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: true,
    tableName: 'products'
  });

  return Product;
};
