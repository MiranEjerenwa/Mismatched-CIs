// Department model field definition
module.exports = function (connection, Sequelize) {
  const Department = connection.define('Department', {

department: {
      type: Sequelize.STRING,
      primaryKey: true,
      validate: {
        notEmpty: true
      }
}
},
{
  timestamps: false
});
  return Department;
}