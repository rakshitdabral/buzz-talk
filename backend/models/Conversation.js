const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema(
    {
        members:{
            type: Array,
        }
    },
    {timestamps:true}
)


//collection for messages
const Conversation = new mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;