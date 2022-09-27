const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'change');
const filePath = `${dirPath}/nirav.txt`;

// fs.writeFileSync(filePath, 'Hi good Morning');
// fs.readFile(filePath, 'utf-8', (err, item) => {
//   console.log(item);
// });

// fs.appendFile(filePath, ' and this is file name is nirav', (err) => {
//   if (!err) console.log('file is updated');
// });

// fs.rename(filePath, `${dirPath}/lathiya.txt`, (err) => {
//   if (!err) console.log('file name is changed');
// });

fs.unlinkSync(`${dirPath}/lathiya.txt`);
