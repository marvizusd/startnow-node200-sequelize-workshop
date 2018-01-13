'use strict';
module.exports = (sequelize, DataTypes) => {
  console.log(sequelize, DataTypes);
  var Author = sequelize.define('Author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Author.hasMany(models.Blog, {
          as: 'blogs',
          foreignKey: 'authorId',
          sourceKey: 'id'
        });
      }
    }
  });
  console.log(Author);  
  return Author;
};