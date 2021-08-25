const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:String,
    description:String,
    des
});
const Post = mongoose.model('Post', PostSchema);
module.export=Post;