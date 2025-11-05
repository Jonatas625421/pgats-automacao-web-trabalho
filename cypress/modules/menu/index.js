class Menu {
  navegarParaLogin() {
    cy.get('a[href="/login"]').click()
  }

  efetuarLogout() {
    cy.get('a[href="/logout"]').should('be.visible').click()
   
  }

  navegarParaAssinatura() {

     cy.visit('https://automationexercise.com/')
     cy.get('#susbscribe_email').type(`email1761602857810@teste99.com`)
     cy.get('#subscribe').click()

  }
}

export default new Menu()