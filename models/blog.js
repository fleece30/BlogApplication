var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

let commentLength = (comment)=>{
    if(!comment[0]){
        return false;
    }
    else{
        if(comment[0].length<1 || comment[0].length>200){
            return false;
        }
        else{
            return true;
        }
    }
};

const commentLengthValidate= [{
    validator: commentLength,
    message: 'Comment should have a body'
}];

var blogSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    createdBy: {type: String},
    createdAt: {type: Date, default:Date.now()},
    likes: {type: Number, default: 0},
    likedBy: {type: Array},
    dislikes: {type: Number, default: 0},
    dislikedBy: {type: Array},
    comments: [
        {
            comment: {type: String, validate: commentLengthValidate},
            commentedBy: {type: String}
        }
    ]
}); 


module.exports = mongoose.model('Blog', blogSchema);