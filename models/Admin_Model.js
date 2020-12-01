const mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({

    username : {
        type : String,
        required : "required"
    },
    password : {
        type : String
    }


});
mongoose.model("Admin",adminSchema);