const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({

    id : {
        type : String
        
    },
    name : {
        type : String
    },
    tamil : {
        type :  Intl
        
    },
    english : {
        type :  Intl
    },
    maths : {
        type : Intl
    },
    science : {
        type :  Intl
    },
    social : {
        type :  Intl
    }



});
mongoose.model("STUDENTDATA",studentSchema);