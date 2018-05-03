'use strict';
module.exports = (sequelize, DataTypes) => {
  var Word = sequelize.define('Word', {
    word: {
        type: DataTypes.STRING,
        allowNull: false
    },
    wordType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    definition: {
        type: DataTypes.STRING,
        allowNull: false
    },
    validate: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
  }, {});
  Word.associate = function(models) {
    // associations can be defined here
  };
  return Word;
};