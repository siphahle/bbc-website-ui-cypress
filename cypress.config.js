const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  projectId: 'k6238d',
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  env: {
    url: "https://www.bbc.com"
  },
  retries:{
    runMode:1,
  },
  projectId: "q47fpu",
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      
    },
     specPattern: 'cypress/e2e/examples/',
     testIsolation:false,
  },
});
