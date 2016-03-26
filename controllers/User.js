'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.usersGet = function usersGet (req, res, next) {
  User.usersGet(req.swagger.params, res, next);
};

module.exports.usersPost = function usersPost (req, res, next) {
  User.usersPost(req.swagger.params, res, next);
};

module.exports.usersUserIdDelete = function usersUserIdDelete (req, res, next) {
  User.usersUserIdDelete(req.swagger.params, res, next);
};

module.exports.usersUserIdGet = function usersUserIdGet (req, res, next) {
  User.usersUserIdGet(req.swagger.params, res, next);
};

module.exports.usersUserIdPatch = function usersUserIdPatch (req, res, next) {
  User.usersUserIdPatch(req.swagger.params, res, next);
};

module.exports.usersUserIdPut = function usersUserIdPut (req, res, next) {
  User.usersUserIdPut(req.swagger.params, res, next);
};
