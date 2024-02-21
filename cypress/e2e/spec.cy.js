describe('template spec', () => {
  beforeEach(() => {
    cy.viewport(1280, 720) // Définit le viewport à 1280x720
  })

  it('passes', () => {
    cy.visit('http://localhost:3000/competences')
  })
})