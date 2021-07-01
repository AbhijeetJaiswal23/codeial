const mongoose=require('mongoose');
const commentSchema=new mongoose.Schema({

    content:{
        type:String,
        require:true

    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    },

    Post:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Post'
    }
},{
    timestamps:true
});

const comment=mongoose.model('comment',commentSchema);
module.exports=comment;