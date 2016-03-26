'use strict';

exports.contactsContactIdDelete = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contactId (String)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.contactsContactIdGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contactId (String)
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
  "email" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.contactsContactIdPatch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contactId (String)
  * contact (ContactRequest)
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
  "email" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.contactsContactIdPut = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contactId (String)
  * contact (ContactRequest)
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
  "email" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.contactsGet = function(args, res, next) {
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
  "email" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.contactsPost = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contact (ContactRequest)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.usersUserIdContactsGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
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
  "email" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.usersUserIdContactsPost = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
  * contactMapping (ContactMappingRequest)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

