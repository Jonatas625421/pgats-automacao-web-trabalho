import { faker } from '@faker-js/faker'

function getRandomEmail() {
  return `qa_teste_${Date.now()}@teste.com`
}

class Login {
 preencherFormularioDePreCadastro() {
  const timestamp = new Date().getTime()
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()

  // preencher o formulário de pré-cadastro de login e senha
  cy.get('[data-qa="signup-name"]').type(`${firstName} ${lastName}`)
  cy.get('[data-qa="signup-email"]').type(`email${timestamp}@teste99.com`) 
  
  cy.contains('button', 'Signup').click( )

 }

 preencherFormularioDeLoginIncorretamente(user, pass) {
    cy.get('[data-qa="login-email"]').type('emailinvalido@teste.com')
    cy.get('[data-qa="login-password"]').type('senhaerrada')

    cy.get('[data-qa="login-button"]').click()

 }

 preencherFormularioDeLoginCorretamente(user, pass) {
    
    cy.get('[data-qa="login-email"]').type(`email1761602857810@teste99.com`)
    cy.get('[data-qa="login-password"]').type(`teste99`)
    
    cy.get('[data-qa="login-button"]').click()
    
 }

}

export default new Login()