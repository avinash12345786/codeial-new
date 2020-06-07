const Post= require('../models/post');

const User=require('../models/user');

module.exports.home= async function(req,res){
//return res.end('<h1>Express is up for codeial</h1>')
  //through views

//   Post.find({},function(err,posts){

//     return res.render('home',{
    
 
//       title:"Codeial||home",
//       posts:posts
//   });
 
  
  
// });
//populate the user of each post
try{

let posts=await Post.find({})
.sort('-createdAt')
.populate('user')
.populate({
path:'comments',
populate:{
  path:'user'
}


});
let users=await User.find({});

  return res.render('home',{
    title:"Codeial||home",
      posts:posts,
      all_users:users
});
  
}catch(err){
  console.log('Error',err);

  return;
}
    
}

//module.exports.actionName=function(req,res)

//using then
//Post.find({}).populate('comments).exec();
//let posts=Post.find({}).populate('comments).exec();
//post.then()