const mongoose = require('mongoose');
const TokenSchema = new monngoose.Schema({
    token:{
        type: String,
        required: true
    },userId:{
        type: String
    }


})
