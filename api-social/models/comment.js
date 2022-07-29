const mongoose = require("mongoose");

/**
 * @typedef Comment
 * @property {string} _id
 * @property {string} description.required - Comment description
 * @property {Profile} profile.require - Profile
 * @property {Post} post.requires - Post
 */

const commentSchema = mongoose.Schema(
    {
        post:{type: mongoose.Schema.Types.ObjectId, ref:'Posts', required:true},
        description:{type: String, required: true, minLength:2},
        profile:{type: mongoose.Schema.Types.ObjectId, ref:'Profile', required:true},
        likes: [{type: mongoose.Schema.Types.ObjectId, ref:'Profile'}],
        createdAt:{type: Date, default: Date.now}
    }
);

const comment = mongoose.model("Comment", commentSchema);
module.exports = comment;