
const express=require('express');
const router=express.Router();
const homecontroller=require('../controllers/home_controller');

console.log("Router loaded!!");


router.get('/',homecontroller.home);



router.use('/user',require('./user'));
router.use('/post',require('./post'));

// like this it will direct to any other url accordingly

module.exports=router;

