describe('template spec', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080) // Définit le viewport à 1280x720
  })

  it('passes', () => {
    cy.visit('/')
    cy.get('[data-testid="btnCompetences"]').click()
    cy.url().should('include', '/competences')
    cy.get('[data-testid="titreFrontEndCompetence"]').should('be.visible')
    cy.get('[data-testid="titreBackEndCompetence"]').should('be.visible')
  })
})