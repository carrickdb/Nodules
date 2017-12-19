//console.log(Object.keys(process.binding('util')));
const {enableHashing} = process.binding('util');

enableHashing("/Users/carrickdb/Dropbox/node_proj/test/src_hashes");
const net = require('net');
require("/Users/carrickdb/Dropbox/node_proj/test/mal.js");
require("/Users/carrickdb/Dropbox/node_proj/test/hello.js");
