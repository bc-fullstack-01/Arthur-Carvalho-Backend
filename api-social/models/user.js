const mongoose = require("mongoose");

/**
 * @typedef User
 * @property {string} _id
 * @property {string} user.required
 * @property {string} password.required
 * @property {Profile} profile - User's Profile 
 */

const userSchema = new mongoose.Schema(
    {
        name:{type: String, required:true, minLength:2},
        user:{type: String, required:true, unique:true, minLength:2},
        password:{type: String, required:true, minLength:2},
        following:[{type: mongoose.Schema.Types.ObjectId, ref:'User'}]
    }
);

const user = mongoose.model("User", userSchema);
module.exports = user;