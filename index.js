const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;

//layout
const expressLayouts=require('express-ejs-layouts');

const db=require('./config/mongoose');
//cookie
app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);

//extract style & script for sub page into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use expess router
app.use('/',require('./routes/'));

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
if(err){

    Console.log(`error in runnting the server:${err}`);
}
console.log(`Server is running on port:${2+2}`);

});

