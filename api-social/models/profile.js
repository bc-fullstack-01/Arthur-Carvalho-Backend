const mongoose = require("mongoose");

/**
 * @typedef Profile
 * @property {string} _id
 * @property {string} name.required
 * @property {User} user.required - User
 * @property {Array.<Profile>} - Following profiles
 */

const profileSchema = mongoose.Schema(
    {
        name: {type: String, required: true, minLength: 2},
        user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
        followers: [{type: mongoose.Schema.Types.ObjectId, ref:'Profile'}],
        following: [{type: mongoose.Schema.Types.ObjectId, ref:'Profile'}],
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now}
    }
);

const profile = mongoose.model("Profile", profileSchema);

module.exports = profile;