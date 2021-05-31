const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user');

//we need to tell passport to use this local startegy that we have created

//authentication using passport
passport.use(new LocalStrategy({
    usernameField:'email'
    },

    function(email,password,done){

        //find a user and establish the identity
        User.findOne({email:email},function(err,user){
            if(err){
                console.log(err);
                return done(err);
            }

            if(!user || user.password!=password){

                console.log('Invalid Username/password');
                return done(null,false); //null error and auth is false

            }

            return done(null,user);
        })

    }
    
));

// serilizing the user to decide which key is to be kept in cookies
//ie which property should be sent to kookie

passport.serializeUser(function(user,done){
    //it will pass user id to cookie
    done(null,user.id);

})


// deserilizing the user from the key in the cookie
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log("Err in finding user");
            return done(err);
        }

        return done(null,user);
    });
});

// now we write a middlewere to check if the user is authenticated

passport.checkAuthentication=function(req,res,next){

    //if the user is signed in then pass to the next function controller
    if(req.isAuthenticated()){
        return next();
    }
    //if the user is not signed in
    return res.redirect('/user/signin');
}
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        //req.user contains the current signed in user from the cookie and we are just sending it to the locals for the ciews
        res.locals.user=req.user;

    }

    next();
}


module.exports=passport;

