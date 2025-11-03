import { faker } from '@faker-js/faker'


class Login {
 preencherFormularioDePreCadastro() {

  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
        
  // preencher o formulário de pré-cadastro de login e senha
  cy.get('[data-qa="signup-name"]').type(`${firstName} ${lastName}`)
  cy.get('[data-qa="signup-email"]').type(getRandomEmail())
        
  cy.contains('button', 'Signup').click( )

 }

 preencherFormularioDeLogin(user, pass) {
    cy.get('[data-qa="login-email"]').type(`email1761602857810@teste99.com`)
    cy.get('[data-qa="login-password"]').type(`teste99`)

    cy.get('[data-qa="login-button"]').click()

 }

}

export default new Login()