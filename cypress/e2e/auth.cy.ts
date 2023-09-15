describe('Navigation', () => {
  it('should navigate to the about page', () => {
    cy.visit('http://localhost:3000/auth')

    cy.url().should('include', '/auth')

    cy.get('h1').contains('Create an account')

    cy.get('p').contains('Enter your email below to create your account')
  })
})
