module.exports = (sequelize, DataTypes) => {
  const Seller = sequelize.define('Seller', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^\+234[0-9]{10}$/ // Nigerian phone number format: +234XXXXXXXXXX
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    businessName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    businessAddress: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    businessDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING, // URL to logo image
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected', 'blocked'),
      defaultValue: 'pending'
    },
    approvedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admins',
        key: 'id'
      }
    },
    approvedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lastLogin: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    timestamps: true,
    tableName: 'sellers'
  });

  return Seller;
};
