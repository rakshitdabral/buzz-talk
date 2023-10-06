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


//routes

const userRouter = require("./routes/user-route");
const conversationRouter = require("./routes/conversation-route");
const messageRouter = require("./routes/message-route");

//middleware
app.use(express.json())
app.use(express.json())
app.use(userRouter)
app.use(conversationRouter)
app.use(messageRouter)

app.listen(8800, () => {
    console.log("Backend server is running!");
  });