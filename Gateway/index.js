const express = require('express');
const port = 8000;

const app = express();
const db = require('./config/mongoose');

app.use(express.urlencoded({extended:false}));
app.use('/',require('./routes/index'));
app.listen(port,function(err){
    if(err){
        console.log('Error in starting the server ',err);
        return;
    }
    else{
        console.log('Server is running successfully at port no : ',port);
    }
});

