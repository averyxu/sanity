describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.login()

    cy.visit('/')
  })
})
