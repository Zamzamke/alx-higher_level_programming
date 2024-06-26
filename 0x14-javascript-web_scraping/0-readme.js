#!/usr/bin/node
<<<<<<< HEAD

const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    process.stdout.write(data);
  }
=======
const argv = process.argv;
const fs = require('fs');
fs.readFile(argv[2], 'utf-8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
>>>>>>> f45b90d40957768ef5b9ecfc1edfb7a3af7d1eb2
});
