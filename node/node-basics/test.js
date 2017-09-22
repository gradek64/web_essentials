var path = require('path');


var pathh = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..') //it will join all array elemetns into path 
// returns '/foo/bar/baz/asdf'

console.log(pathh);