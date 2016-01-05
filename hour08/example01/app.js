var fs = require('fs'),
  data = "Some data I want to write to a file 2222222222";

fs.writeFile('test/file.txt', data, function (err) {
  if (!err) {
    console.log('Wrote data to file.txt');
  } else {
    throw err;
  }
});

fs.readFile('test/file.txt', 'utf-8', function(err, data) {
    if (!err) {
        console.log(data);
    } else {
        throw err;
    }
});