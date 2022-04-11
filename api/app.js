const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const drawingRoutes = require('./drawing/drawing.routes')
app.use('/api/drawing', drawingRoutes)

module.exports = app;