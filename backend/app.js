const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS")
    next()
})

const drawingRoutes = require('./drawing/drawing.routes')
app.use('/api/drawing', drawingRoutes)

module.exports = app;