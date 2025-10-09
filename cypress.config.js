const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    defaultCommandTimeout: 60000, // tempo máximo para cy.get, cy.contains, etc (10s)
    requestTimeout: 60000,        // tempo máximo para esperar requisições iniciarem (20s)
    responseTimeout: 60000,       // tempo máximo para esperar respostas de requisições (20s)
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },

  },
  projectId: '1153sq',
})
