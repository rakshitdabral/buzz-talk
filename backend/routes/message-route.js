const express = require("express");
const Message = require("../models/Message")
const {newMessage,getMessages} = require("../controller/message-controller")
const router = express.Router();

//routes
router.post("/api/v1/message",newMessage)
router.get("/api/v1/message/:conversationId",getMessages)



module.exports = router;