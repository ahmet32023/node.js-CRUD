const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    
        value:{
            type: Number,
            required:true,
            trim:true
        },
        lessThanFive:{
            type: String,
            default:0
        },
        timestamp:{
            type: String,
            default:new Date().toISOString()
        },
        readableTimestamp:{
            type: String,
            default: new Date().toLocaleString()
        }
})

module.exports = mongoose.model('post', PostSchema)