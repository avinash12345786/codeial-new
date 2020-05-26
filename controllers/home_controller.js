module.exports.home=function(req,res){
//return res.end('<h1>Express is up for codeial</h1>')
  //through views


 
  return res.render('home',{

 
    title:"home"
  
});
}

//module.exports.actionName=function(req,res)