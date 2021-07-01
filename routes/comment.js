const express=require('express');
const router=express.Router();
const passport=require('passport');
const CommentController=require('../controllers/commentcontroller');

router.post('/PostComment',CommentController.createComment);



console.log('inside comment router');
module.exports=router;