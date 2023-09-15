import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 15000,
  e2e: {
    setupNodeEvents() {},
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000'
  }
})
