/**
 * Mongoose Schema for MongoDB
 */
var mongoose = require('mongoose');

// File schema
// 
// 1-to-1 onto function between user and files


// User schema
exports.User = mongoose.model('User', new mongoose.Schema({
  googleId: { type: String, index: { unique: true } },
  accessToken: String,
  displayName: String,
  link: String,
  picture: String,
  gender: String,
  email: String,
  locale: String,
  verified: Boolean,
  isAdmin: Boolean,

  diskUsage: { type: Number, default: 0 },
  diskQuota: { type: Number, default: 2147483648 }
}));