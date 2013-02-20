var tumblr = require("./tumblr");
var dom = require("./dom");
var writefile = require("./writefile");
require('events').EventEmitter

tumblr.getPosts(dom.printPost, writefile.writefile);