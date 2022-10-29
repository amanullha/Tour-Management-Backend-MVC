const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const ToursRouter = require('./routes/v1/tours.route');

const app = express();




// middleWare
app.use(express.json());
app.use(cors());




// MONGOOSE STRUCTURE
// SCHEMA -> MODEL-> QUERY



// Test route

app.get('/', (req, res) => {
    res.send("Tour Management System backend server is running")
})





// Data Routes

app.use("/api/v1/tours", ToursRouter)





// Unknown API Handle

app.get('*', (req, res) => {

    res.send("Router isn't found!");
})


module.exports = app;










































