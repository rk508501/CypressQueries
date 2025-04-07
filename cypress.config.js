const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        "readTextFile": (filePath) => {
          const fs = require('fs');
          return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
                reject(err);
              } else {
                resolve(data);
              }
            });
          });
        }
      })
    },
  },
});
