/*
============================================
; Title:  Assignment 2-4
; Author: David Tays
; Date:   May 15 2018
; Modified By: <David Tays>
;Description:  create a mongoose User model, JWT public key, authController, and an api-catalog for routes
;===========================================*/

var User = require('../models/user');

// register a new user on POST 
exports.user_register = function(req, res) {
    res.send('NOT IMPLEMENTED: User token lookup GET');
};

// Verify token on GET
exports.user_token = function(req, res){
    res.send('NOT IMPLEMENTED: User token lookup GET');
};
