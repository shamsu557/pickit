module.exports = (sequelize, DataTypes) => {
  const Rider = sequelize.define('Rider', {
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
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vehicleType: {
      type: DataTypes.ENUM('motorcycle', 'bicycle', 'car', 'van'),
      allowNull: false,
      defaultValue: 'motorcycle'
    },
    vehicleNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    licenseNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    identificationNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    profilePicture: {
      type: DataTypes.STRING, // URL to profile picture
      allowNull: true
    },
    currentLocation: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: true
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
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
    tableName: 'riders'
  });

  return Rider;
};
