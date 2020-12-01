require('./models/index');

const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const expresshandler = require('express-handlebars');
const path = require('path');
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

const getrouter = require('./Controller/controller');

app.use(bodyparser.urlencoded({

    extended : true

}));

app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',expresshandler({

    extname : 'hbs',
    defaultLayout : 'mainLayout',
    layoutsDir : __dirname+'/views/layouts/',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
    

}));

app.set('view engine','hbs');

//app.use(bodyparser.json);

app.use('/',getrouter);




app.listen(8080,(err) => {

    if(err){
        console.log("err acured : "+err);
    }else{
        console.log("app running port is 8080");
    }

});