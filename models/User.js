// Ingredient model definition
module.exports = function (connection, Sequelize) {
  const User = connection.define('User', {

    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

     fname:{
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    lname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    email: {
      type: Sequelize.STRING,
      allowNull: false,
      isEmail: true
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    department: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    Role: {
      type: Sequelize.STRING,
      allowNull: false,
    }
    
  },
  {
    timestamps: false
}
  );

// // Associations to Cidata model

// User.associate = function(models) {
//   User.hasMany(models.Cidata, {
//     foreignKey: 'id'
//   });
//   User.belongsTo(models.Department, {
//     foreignKey: 'department'
//   });
// };

  return User;
}

