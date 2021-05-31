const express=require('express');
const router=express.Router();

const usercontroller=require("../controllers/user_controller");
const passport=require('passport');

//allow only to signed user

router.get('/profile',passport.checkAuthentication,usercontroller.profile);
// router.get('/photos',usercontroller.photos);
router.get('/signin',usercontroller.signin);
router.get('/signup',usercontroller.signup);

router.get('/signout',usercontroller.destroysession);
router.post('/create',usercontroller.create);
//use passport as a middleware authenticar
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/user/signin'},
) ,usercontroller.createSession);




console.log("inside users router");

module.exports=router;
