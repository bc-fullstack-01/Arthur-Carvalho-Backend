/**
 * This function get my Users
 * @group DEV
 * @route GET /v1/seed
 * @returns {Object} 200
 */

/**
 * WS
 * @group DEV
 * @route GET
 * @return {Object} 101
 */

exports.Profile = require('./profileRouter');
exports.User = require('./userRouter');
exports.Post = require('./postRouter');
exports.Comment = require('./commentRouter');
exports.Security = require('./securityRouter');
exports.Feed = require('./feedRouter');