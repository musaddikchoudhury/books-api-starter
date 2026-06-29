const { DataTypes } = require('sequelize');
const db = require('../db'); 

const Book = db.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING
  },
  publishedYear: {
    type: DataTypes.INTEGER
  },
  available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

module.exports = Book;