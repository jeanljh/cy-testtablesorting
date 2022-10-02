const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cuf6cv',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    baseUrl: 'https://datatables.net/examples/basic_init/',
    viewportHeight: 1080,
    viewportWidth : 1920,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
