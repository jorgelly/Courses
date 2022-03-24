const db = require('./database');
const Sequelize = require('sequelize');

const Course = db.define('course', {
  choiceOne: {
    type: Sequelize.STRING,
  },
  choiceTwo: {
    type: Sequelize.STRING,
  },
  choiceThree: {
    type: Sequelize.STRING,
  },
});

module.exports = Course;
