const comment=require('../models/comment');
const Post=require('../models/post');

module.exports.createComment=function(req,res){

    console.log(req.body);

    Post.findById(req.body.post,function(err,post)
    {

        if(post)
        {

            comment.create({
                content:req.body.content,
                Post:req.body.post,
                user:req.user._id
            },function(err,comment){

                if(err){
                    console.log(err);
                    res.redirect('back');
                }


                post.comments.push(comment);
                post.save();


                 res.redirect('/');
            });
        }

    
    })
}
