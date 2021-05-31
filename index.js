

                                // ####### WELCOME######################

                // *********************** INITILLIZE THE PROJECT WITH ******************************   
           // ************************** NPM in IT ******************************************************
// WHY DO WE USE NPM IN IT ?

// now since we have to make everything suaitable and seperate but centrally accessible ,that is our routes,controllers 
// should be seperate seperate ,so we are going to create certain directeries

/// now we should fire up our express server. how?
//  ---step 1 install express
//  ---strp 2 require in our entry file
//  ---step 3 fire up

const express=require('express');
// const expressLayouts = require('express-ejs-layouts');
const cookieParser=require('cookie-parser');
const path=require('path');

const app=express();
// now we need to define the port
const port=8000;


const db=require('./config/mongoose');


//used for seesion cookie\
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport_local_stategy');
const MongoStore=require('connect-mongo')(session);

//saas middleware
const sassMiddleware=require('node-sass-middleware');

app.use(sassMiddleware({

    //where do i pickup scss files to convert into css
    src:'./assets/scss',
    //destination---where do i need to put my css files
    dest:'./assets/css',
    //do i need to display error--yes i do
    debug:true,
    //do i want it to be in single line or multiple line
    outputStyle:'extended',
    //where should it look for prefix
    prefix:'/css'


}));


//finally we need to make the app listen

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("server is up and running at port : ",port);
});

// check if server runs by nodemon
// time to set up routes

//reading through the post request
app.use(express.urlencoded());

//setting up the cookie parser

app.use(cookieParser());

app.use(express.static('./assets'));


// now a controller is set of different actions ...lets make different actions in controlers

// now after we have setup our routes and controllers now its time to set up our view engines


//Q how does app.set() works

//settuing up layouts

// app.use(expressLayouts);
// //extract style and scripts from sun=b pages into layouts
// app.set('layout extractStyles',true);
// app.set('layout extractScripts',true);

// so we need to install ejs------ npm install ejs
// now we need to use ejs as our view engine


// setting up our view engine

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//

//mongpstore is used to store the session cookie in db
app.use(session({
    //name of cooke
    name:'codeial',
    // when ever encryptio occurs there is a key to encode it and decode it
    //to encode it we are going to use just a random text later on we will generate it when we deploy
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,

    //we neet to give an age to cookie ie;after how long it expires
    cookie:{
        maxAge:(1000*60*100)
    },
    store:new MongoStore ({
        mongooseConnection:db,
        autoRemove:'disabled'
    },function(err){
        console.log(err || 'connect mongodb setup');
    })
}));



// now we need to tell the app to use passport
app.use(passport.initialize());
app.use(passport.session());


app.use(passport.setAuthenticatedUser)
// use express router

app.use('/',require('./routes'));


// now its time to render views ... so just lets render 
// Ay yoo creating a schema for user
// time to set up our own cookies

// will use a module called cookie parssers to handle kookies
// now we require that

// so up to now we were using cookies for authentication or we say that we were doing manual authentication but
//now we will use passport.js to to authenticatin

//will be uing passporty local

//npm install passsport
//npm install passport-lpcal

// now we setup folder for authentication
//now we need express library express session

///******************** so up to now we have completed authentication using passport.js */ n
//now we will see how to write css code in more efficeint way using SCSS/SASS

//npm install node-sass-middleware

//*********************TIME TO LEARN DATABAssE RELATIONS */

// now we need to create a schema for post
// one user can create many post but one post cannot be related to multipe user
// create post.js scema in models
