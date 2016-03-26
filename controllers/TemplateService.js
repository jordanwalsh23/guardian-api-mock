'use strict';

exports.usersUserIdTemplatesGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "voice" : "aeiou",
  "updatedTime" : "aeiou",
  "name" : "aeiou",
  "sms" : "aeiou",
  "createdTime" : "aeiou",
  "id" : "aeiou",
  "userId" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.usersUserIdTemplatesPost = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
  * template (TemplateRequest)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "voice" : "aeiou",
  "updatedTime" : "aeiou",
  "name" : "aeiou",
  "sms" : "aeiou",
  "createdTime" : "aeiou",
  "id" : "aeiou",
  "userId" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.usersUserIdTemplatesTemplateIdDelete = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
  * templateId (String)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.usersUserIdTemplatesTemplateIdGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
  * templateId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "voice" : "aeiou",
  "updatedTime" : "aeiou",
  "name" : "aeiou",
  "sms" : "aeiou",
  "createdTime" : "aeiou",
  "id" : "aeiou",
  "userId" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.usersUserIdTemplatesTemplateIdPatch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
  * templateId (String)
  * template (TemplateRequest)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "voice" : "aeiou",
  "updatedTime" : "aeiou",
  "name" : "aeiou",
  "sms" : "aeiou",
  "createdTime" : "aeiou",
  "id" : "aeiou",
  "userId" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.usersUserIdTemplatesTemplateIdPut = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
  * templateId (String)
  * template (TemplateRequest)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "voice" : "aeiou",
  "updatedTime" : "aeiou",
  "name" : "aeiou",
  "sms" : "aeiou",
  "createdTime" : "aeiou",
  "id" : "aeiou",
  "userId" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

