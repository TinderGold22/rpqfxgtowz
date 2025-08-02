const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, 'package.json');

fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading package.json:', err);
    process.exit(1);
  }

  try {
    const packageJson = JSON.parse(data);
    if (packageJson.private !== undefined) {
      delete packageJson.private;
      fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8', (err) => {
        if (err) {
          console.error('Error writing package.json:', err);
          process.exit(1);
        }
        console.log('Successfully removed \'private\' property from package.json');
      });
    } else {
      console.log('\'private\' property not found in package.json, no changes made.');
    }
  } catch (parseErr) {
    console.error('Error parsing package.json:', parseErr);
    process.exit(1);
  }
});


