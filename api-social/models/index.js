const mongoose = require("mongoose");

/**
 * @typedef Login
 * @property {string} user.required - Username
 * @property {string} password.required - Password
 */

/**
 * @typedef Registry
 * @property {string} name - User's name
 * @property {string} user.required - Username
 * @property {string} password.required - Password
 */

const connect = mongoose.connect(
    `${process.env.MONGO_URL || 'mongodb://localhost:27017/mydb_development'}`
);

exports.Post = require("./post");
exports.Comment = require("./comment");
exports.User = require("./user");
exports.Profile = require("./profile");

mongoose.connection.on("error", () => {
    console.error("Database error");
});
mongoose.connection.on("connected", () => {
    console.error("Database Connected");
});
mongoose.connection.on("disconnected", () => {
    console.error("Database Disconnected");
});

exports.Connection = connect;