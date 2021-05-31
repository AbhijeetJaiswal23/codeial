// for creating aschema we import mongoose

const mongoose=require('mongoose');
// scema of user
const userSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    }
},{
    // mongoose will manage created at and updated at
    timestamps:true
});

const User=mongoose.model('User',userSchema);
module.exports=User;