// requiring post schema

const Post=require('../models/post');

module.exports.createPost=function(req,res){

    Post.create({
        content:req.body.content,
        user:req.user._id
    },function(err,post){

        if(err){
            console.log(err);
            return;
        }

        return res.redirect('/post/postit');
    });
}

module.exports.Postit=function(req,res){

    // return res.render('home',{

    //     post:req.body

    // });

    return res.redirect('/');


}
