const express= require('express');
const router=express.Router();
console.log('Router Loaded');
const homeController=require('../controllers/home_controller');


router.get('/',homeController.home);
router.use('/users',require('./users'));

//imp comments
//for any further routes , access from here
//router.use('/routersName',require('./routerFile));

module.exports=router;
