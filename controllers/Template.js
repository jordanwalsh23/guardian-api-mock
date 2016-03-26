'use strict';

var url = require('url');


var Template = require('./TemplateService');


module.exports.usersUserIdTemplatesGet = function usersUserIdTemplatesGet (req, res, next) {
  Template.usersUserIdTemplatesGet(req.swagger.params, res, next);
};

module.exports.usersUserIdTemplatesPost = function usersUserIdTemplatesPost (req, res, next) {
  Template.usersUserIdTemplatesPost(req.swagger.params, res, next);
};

module.exports.usersUserIdTemplatesTemplateIdDelete = function usersUserIdTemplatesTemplateIdDelete (req, res, next) {
  Template.usersUserIdTemplatesTemplateIdDelete(req.swagger.params, res, next);
};

module.exports.usersUserIdTemplatesTemplateIdGet = function usersUserIdTemplatesTemplateIdGet (req, res, next) {
  Template.usersUserIdTemplatesTemplateIdGet(req.swagger.params, res, next);
};

module.exports.usersUserIdTemplatesTemplateIdPatch = function usersUserIdTemplatesTemplateIdPatch (req, res, next) {
  Template.usersUserIdTemplatesTemplateIdPatch(req.swagger.params, res, next);
};

module.exports.usersUserIdTemplatesTemplateIdPut = function usersUserIdTemplatesTemplateIdPut (req, res, next) {
  Template.usersUserIdTemplatesTemplateIdPut(req.swagger.params, res, next);
};
