const mongoose = require("mongoose");

/**
 * @typedef Post
 * @property {string} _id
 * @property {string} title.required - Title
 * @property {string} description.required - Description
 * @property {Profile} profile.required = Profile
 * @property {Array<Comment>} comments - Comments
 */

const postSchema = mongoose.Schema(
    {
        title: {type: String, required: true, minLength: 2},
        description: {type: String, required: true, minLength: 2},
        profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
        comments: [{type: mongoose.Schema.Types.ObjectId, ref:'Comment'}],
        likes: [{type: mongoose.Schema.Types.ObjectId, ref:'Profile'}],
        image: {type: Boolean, default: false},
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now}
    }
);

const posts = mongoose.model("Posts", postSchema);

module.exports = posts;