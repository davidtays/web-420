/*
============================================
; Title:  Assignment 2-4
; Author: David Tays
; Date:   May 15 2018
; Modified By: <David Tays>
;Description:  create a mongoose User model, JWT public key, authController, and an api-catalog for routes
;===========================================*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';
module.exports = config;