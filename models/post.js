//to create post schema

const mongoose=require('mongoose');


//for creating a shema

const postSchema=new mongoose.Schema({

    content:{
        type:String,
        require:true
    },

    // now we need to refer to user schema

    user:{
        type:mongoose.Schema.Types.ObjectId,
        //which schema should it refer
        ref:'User'

    },

    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'comment'
        }
    ]

},{
    timestamps:true
});

// before exporting we need to tell that this is giong to be a model in db

const Post=mongoose.model('Post',postSchema);
module.exports=Post;