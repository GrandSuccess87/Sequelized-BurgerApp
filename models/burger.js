module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    burgerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10]
      }
    },
    Devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1]
    }
  });

  Post.sync()
  
};