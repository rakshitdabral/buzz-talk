const express = require("express");
const {newConvo,getConvo} = require("../controller/conversation-controller")
const Conversation = require("../models/Conversation")
const router = express.Router();

//routes
router.post("/api/v1/conversation", newConvo)
router.get("/api/v1/conversation/:userId", getConvo)


module.exports = router;