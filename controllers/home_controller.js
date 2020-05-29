const Post= require('../models/post');

module.exports.home=function(req,res){
//return res.end('<h1>Express is up for codeial</h1>')
  //through views

//   Post.find({},function(err,posts){

//     return res.render('home',{
    
 
//       title:"Codeial||home",
//       posts:posts
//   });
 
  
  
// });

Post.find({})
.populate('user')
.populate({
path:'comments',
populate:{
  path:'user'
}


})
.exec(function(err,posts){

  return res.render('home',{
    
 
    title:"Codeial||home",
    posts:posts
});



});

}

//module.exports.actionName=function(req,res)