
class contato {    
preencherFormularioDeContato() {   
       
        cy.visit('https://automationexercise.com/')

        cy.url().should('contain', 'https://automationexercise.com/')
        cy.get('a[href="/contact_us"]').click()
        cy.url().should('contain', 'https://automationexercise.com/contact_us')
        
        // Carrega o arquivo example.json
        cy.fixture('example.json').then((userData) => {
        cy.get('[data-qa="name"]').type(userData.name)
        cy.get('[data-qa="email"]').type(userData.email)
        cy.get('[data-qa="subject"]').type(userData.subject)
        cy.get('[data-qa="message"]').type(userData.message)

        })
        
        //Anexando um arquivo no teste
        cy.fixture('example.json').as('arquivo')
        cy.get('input[type=file]').selectFile('@arquivo')
        cy.get('[data-qa="submit-button"]').click()
    }
}
    
export default new contato()   