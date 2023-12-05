//import fs from 'fs';

// 👇️ if you use the CommonJS require() syntax
const fs = require('fs')

function renameDirectory(oldName, newName) {
  fs.rename(oldName, newName, error => {
    if (error) {
      throw new Error(error);
    }
  });
}

const oldName = './build';
const newName = './doc';

renameDirectory(oldName, newName);

console.log('Directory has been renamed successfully');