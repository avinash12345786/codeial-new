const nodemailer=require('nodemailer');
const ejs=require('ejs');
const path=require('path');

let transporter=nodemailer.createTransport({
 service:'gmail',
 post:'smtp.gmail.com',
 port:'587',
 auth:{
     user:'avikiitian7',
     pass:'BirlaKpit@123'
 }


});

let renderTemplate=(data,relativePath)=>{
    let mailHTML;
ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template){
            if(err){console.log('error in rendering  template',err);return}
            mailHTML=template
        }

)
    return mailHTML
}
module.exports={
    transporter:transporter,
    renderTemplate:renderTemplate
}