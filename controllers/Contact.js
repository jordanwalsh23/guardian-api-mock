'use strict';

var url = require('url');


var Contact = require('./ContactService');


module.exports.contactsContactIdDelete = function contactsContactIdDelete (req, res, next) {
  Contact.contactsContactIdDelete(req.swagger.params, res, next);
};

module.exports.contactsContactIdGet = function contactsContactIdGet (req, res, next) {
  Contact.contactsContactIdGet(req.swagger.params, res, next);
};

module.exports.contactsContactIdPatch = function contactsContactIdPatch (req, res, next) {
  Contact.contactsContactIdPatch(req.swagger.params, res, next);
};

module.exports.contactsContactIdPut = function contactsContactIdPut (req, res, next) {
  Contact.contactsContactIdPut(req.swagger.params, res, next);
};

module.exports.contactsGet = function contactsGet (req, res, next) {
  Contact.contactsGet(req.swagger.params, res, next);
};

module.exports.contactsPost = function contactsPost (req, res, next) {
  Contact.contactsPost(req.swagger.params, res, next);
};

module.exports.usersUserIdContactsGet = function usersUserIdContactsGet (req, res, next) {
  Contact.usersUserIdContactsGet(req.swagger.params, res, next);
};

module.exports.usersUserIdContactsPost = function usersUserIdContactsPost (req, res, next) {
  Contact.usersUserIdContactsPost(req.swagger.params, res, next);
};
