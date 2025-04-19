const { defineConfig } = require('cypress');

module.exports = defineConfig({
  blockHosts: [
    'www.googletagmanager.com',
    'sb.scorecardresearch.com',
    'dd.nytimes.com',
    'a.nytimes.com',
    'c.amazon-adsystem.com',
    'rumcdn.geoedge.be',
    'securepubads.g.doubleclick.net',
  ],
  e2e: {
    baseUrl: "https://demoqa.com",
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
