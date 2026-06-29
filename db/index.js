const { Sequelize } = require('sequelize');

const db = new Sequelize('postgres://postgres:root@localhost:5432/books_api', {
  logging: false,
});

module.exports = db;