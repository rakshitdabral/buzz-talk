const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app = express()

// dotenv config
dotenv.config();


// connection with mongo
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {console.log(err)})


app.listen(8800, () => {
    console.log("Backend server is running!");
  });