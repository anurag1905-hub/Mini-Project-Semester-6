const express = require('express');
const cookieParser = require('cookie-parser');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const logger = require('morgan');
const fs = require('fs');
const path = require('path');

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

const logDirectory = path.join(__dirname,'../production_logs'); // Defines where the logs will be stored.
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

app.use(logger('dev'));

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log('Error in starting the server ',err);
        return;
    }
    else{
        console.log('Server is running successfully at port no : ',port);
    }
});

