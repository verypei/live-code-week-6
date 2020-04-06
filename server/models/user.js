'use strict';

const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {hooks:{
    beforeCreate:(instance,option)=>{
      let salt = bcrypt.genSaltSync(8)
      let hash = bcrypt.hashSync(instance.password,salt)
      instance.password=hash
    }
  },sequelize});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Food,{foreignKey:"UserId"})
  };
  return User;
};