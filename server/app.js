const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db/models');

/* sequelize configuration */
// db.Sequelize.sync();

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send();
});

app.use("/api/authors", require("./routes/authors"));
app.use("/api/blogs", require("./routes/blogs"));

module.exports = app;