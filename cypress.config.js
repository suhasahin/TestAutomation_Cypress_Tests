const { defineConfig } = require("cypress");

module.exports = defineConfig({    
  projectId: 'bkua8t',
  e2e: {

    viewportHeight: 1280,
    viewportWidth: 720,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
            
    },
    baseUrl : 'https://testautomationpractice.blogspot.com/'
  },

});
