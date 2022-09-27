const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'allFiles');

// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(dirPath + '/hello' + i + '.txt', 'this is a multiple files are available here');
// }

fs.readdir(dirPath, (err, files) => {
  files.forEach((item) => {
    console.log('File Name is ', item);
  });
});
