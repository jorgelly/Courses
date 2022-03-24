const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../public/index.html')));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api'))

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Internal server error')
});

module.exports = app;
