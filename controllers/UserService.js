'use strict';

exports.usersGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  * username (String)
  * mobile (String)
  * email (String)
  * country (String)
  * timezone (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "country" : "aeiou",
  "updatedTime" : "aeiou",
  "timezone" : "aeiou",
  "name" : "aeiou",
  "mobile" : "aeiou",
  "createdTime" : "aeiou",
  "id" : "aeiou",
  "email" : "aeiou",
  "username" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.usersPost = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user (UserRequest)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.usersUserIdDelete = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.usersUserIdGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "country" : "aeiou",
  "updatedTime" : "aeiou",
  "timezone" : "aeiou",
  "name" : "aeiou",
  "mobile" : "aeiou",
  "createdTime" : "aeiou",
  "id" : "aeiou",
  "email" : "aeiou",
  "username" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.usersUserIdPatch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
  * user (UserRequest)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "country" : "aeiou",
  "updatedTime" : "aeiou",
  "timezone" : "aeiou",
  "name" : "aeiou",
  "mobile" : "aeiou",
  "createdTime" : "aeiou",
  "id" : "aeiou",
  "email" : "aeiou",
  "username" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.usersUserIdPut = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
  * user (UserRequest)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "country" : "aeiou",
  "updatedTime" : "aeiou",
  "timezone" : "aeiou",
  "name" : "aeiou",
  "mobile" : "aeiou",
  "createdTime" : "aeiou",
  "id" : "aeiou",
  "email" : "aeiou",
  "username" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

