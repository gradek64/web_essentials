var imported = require('./data_to_import');

//run function from file_to_import function to_exoprt which is exposed in require('...');
console.log(imported.greet('en'));
console.log(imported.person.name);
