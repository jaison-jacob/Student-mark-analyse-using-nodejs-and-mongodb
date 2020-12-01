const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/Student',{useNewUrlParser : true},(err) => {

if(err){
    console.log("err accured : "+err);
}else{
    console.log("connection successfull");
}


});

const adminmodels = require('./Admin_Model');
const studentmodel = require('./student_model');