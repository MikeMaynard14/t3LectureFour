const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
require('dotenv/config');


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(routes);

mongoose.connect(process.env.DB_CONNECTION, (err) =>{
    if(err){
        console.log("Error Connecting to MongoDB");
    } else {
        console.log("Connected to MongoDB");
    }
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {console.log(`Server is running on: ${PORT}`)});