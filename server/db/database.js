const Sequelize = require('sequelize')

const config = {
  logging: false
}

if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  };
};

const dbName = 'canoe-courses'
console.log(`Opening database connection to ${dbName}`);
const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`, config);

module.exports = db;
