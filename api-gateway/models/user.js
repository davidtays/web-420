/*
============================================
; Title:  Assignment 2-4
; Author: David Tays
; Date:   May 15 2018
; Modified By: <David Tays>
;Description:  create a mongoose User model, JWT public key, authController, and an api-catalog for routes
;===========================================*/

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});
module.exports = mongoose.model('User', userSchema);

//user.save is used add a user to db
module.exports.add = (user, callback) => {
    user.save(callback);
}

//get the user by id
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
}

