const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const admindata = mongoose.model("Admin");
const studentdata = mongoose.model("STUDENTDATA")

//index page
router.get('/',(req,res) => {

    //res.send("it is working");
    res.render("index",{});

});

//logindata

router.post("/logindata",(req,res) => {

    var username1 = req.body.username;
    var password1 = req.body.password;

    admindata.find((err,docs) => {

        if(!err){
            docs.forEach(element => {
               if((element.username).localeCompare(username1) === 0 && (element.password).localeCompare(password1) === 0){
                console.log("password is : "+element.password)  
                res.render("adminpage",{
                       list : element
                   });
               }else{
                  
                   
                   res.render("index",{
                      
                    

                   });
               }
           });
        }else{
            console.log("error accured in tha database");
        }

    });


});
router.get("/adminpage",(req,res) => {
    res.render("adminpage",{});
});



router.post('/loginregister',(req,res) => {

    res.send("it is working in post req");
    console.log(req.body);

    insertdata(req,res);

    //res.render("index",{});

});



router.get("/register",(req,res) => {

    res.render("register",{});

});
router.get("/adminpage",(req,res) => {

    res.render("adminpage",{});

});
router.get("/studentdataform",(req,res) => {

    res.render("studentdataform",{});

});
router.get("/studentdetail",(req,res) => {
      
    studentdata.find((err,docs) => {
        if(!err){
          
           
           
            res.render("studentDetail",{
                list : docs
            });
        }else{
            throw err;
        }
    });

   

});
router.post("/studentdata",(req,res) => {

console.log("print student data "+req.body.name);
insertstudentdata(req,res);
res.render("studentdataform",{

    message : "data inserted successfully"
});



});


router.get("/result/:id",(req,res)=>{

    console.log(req.params.id);
    studentdata.findById(req.params.id,(err,docs) => {

    if(!err){
        console.log(docs);

        var total =parseInt(docs.tamil)+
        parseInt(docs.english)+
        parseInt(docs.maths)+
        parseInt(docs.science)+
        parseInt(docs.social)

                console.log(total);
                console.log(parseInt(docs.tamil));
                var avg = total/5;
                console.log(avg);
                var  result = "pass";

                if(parseInt(docs.tamil) < 40 || parseInt(docs.english) < 40 || parseInt(docs.maths) < 40 || parseInt(docs.science) < 40 || parseInt(docs.social) < 40 ){
                       result = "fail"
                }

                res.render("result",{
                    message : "student name        :         "+ docs.name+
                               "                  student mark              : "+total+
                               "              student average           :            "+avg+
                               "              result :        "+result
                });

    }else{
       res.render("result",{

        message : "RECORD NOT FOUND"
       });
    }

});

});








//functions 


function insertdata(req,res){
    var data = new admindata();
    data.username=req.body.username;
    data.password=req.body.password;
    data.save();
    console.log(data.username)
}

function insertstudentdata(req,res){
    var studdata = new studentdata();
    studdata.id=req.body.id;
    studdata.name=req.body.name;
    studdata.tamil=req.body.tamil;
    studdata.english=req.body.english;
    studdata.maths=req.body.maths;
    studdata.science=req.body.science;
    studdata.social=req.body.social;
    studdata.save();

}



module.exports = router;