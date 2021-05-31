//requiring the db schema

const User=require("../models/user");

module.exports.profile=function(req,res){

    return res.render('userprofile',{
        title:"codeial"
    });

    // i will only allow to those ppl who are signed in ie:id is bhisible

    // if(req.cookies.user_id){

    //     // if he is alreaduy logged in

    //     User.findById(req.cookies.user_id,function(err,user){

    //         if(user){

    //             return res.render('userprofile',{

    //                 user:user
    
    //             })
                
    //         }
    //         else
    //         {
    //             return res.redirect('/user/signin');
    //         }

    //     });

    //     // return res.render('/user/signin');

    // }
    // else
    // {
    //     // go back to signin page
    //     return res.redirect('/user/signin');
    // }

}


module.exports.signin=function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/user/profile');
    }

    // if(req.cookies.user_id){
    //     return res.redirect('/user/profile');
    // }

    return res.render('signin',{

        title:"Codeial"
    });
}
module.exports.signup=function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/user/profile');
    }

    return res.render('signup',{

        title:"Codeial"
    });
}

// get the signup data
module.exports.create=function(req,res){
    //check wether password and confirm password equal or not
    if(req.body.password!=req.body.confirmpassword){
        return res.redirect('back');
    }

    //email has to be unique
    // now after importing schema check if the email is unique or not
    User.findOne({email:req.body.email},function(err,user){

        if(err){
            console.log("Err in Finding User so creating a new one");
        }

        //creating
        if(!user){
            User.create(req.body,function(err,user){

                if(err){
                    console.log("err in creating");
                    return ;
                }

                return res.redirect("/user/signin");
            })
        }
        else
        {
            return res.redirect('back');
        }
    })

}
//signin and create a session for user
module.exports.createSession=function(req,res){
    // now we wiil check if username (email) exists or not and then we will confirm the password

    // //when you havent signed out

    // if(req.cookies.user_id){

    //     return res.redirect('/user/profile');
    // }

    // // find the user
    // User.findOne({email:req.body.email},function(err,user){

    //     if(err){
    //         console.log(err);
    //     }

    //     //if user is found
    //     if(user){
    //         //handle password not found
    //         if(user.password!=req.body.password){
    //             return res.redirect('back');
    //         }

    //         //handle create session
    //         res.cookie('user_id',user.id);
    //         res.cookie('name',user.name);
    //         res.cookie('email',user.email);
    //         res.cookie('password',user.password);

    //         res.redirect('/user/profile');


    //     }
    //     //else
    //     else{
    //         res.redirect('back');
    //     }
    // })

    return res.redirect('/');

}

module.exports.destroysession=function(req,res){

    req.logout();

    return res.redirect('/');
}