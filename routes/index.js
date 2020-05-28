const express= require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');

console.log('Router Loaded');
router.get('/',homeController.home);   
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));

//imp comments
//for any further routes , access from here
//router.use('/routersName',require('./routerFile));

module.exports=router;   
