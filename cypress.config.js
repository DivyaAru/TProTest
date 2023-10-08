const { defineConfig } = require ('cypress');
module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    pageLoadTimeout: 800000,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on,config);
      // implement node event listeners here
    },
    baseUrl: "https://app.tpro.rocks/authentication"
    
  },
  defaultCommandTimeout : 30000
});
