const Post=require('../models/post');
module.exports.home=function(req,res){
    // console.log(req.cookies);
    // // res.cookie('id',25);

    // Post.find({},function(err,posts){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }

    //     return res.render('home',{

    //         title:'Codeial home',
    //         post:posts

    //     });

    // });

    // finding posts and populating User schema of each postwith iy
    Post.find({}).populate('user').exec(function(err,posts){

        if(err){
            console.log(err);
            return;
        }

        return res.render('home',{

            title:'codeial home',
            post:posts
        });
    });


    
}