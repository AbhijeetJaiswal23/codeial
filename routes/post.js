const express=require('express');
const router=express.Router();
const passport=require('passport');
const PostController=require('../controllers/post_controller');

router.post('/create-post',PostController.createPost);
router.get('/postit',PostController.Postit);

console.log('inside post router');
module.exports=router;