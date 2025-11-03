
import { faker } from '@faker-js/faker'   

class Cadastro {
    preencherFormularioDeCadastroCompleto() {

         cy.get('#id_gender1').check()

        //selecionando radio buttons
        cy.get('input[type=radio]').check('Mr')
        cy.get('input#password').type('teste99', {log: false}) //escondendo a senha do log na execução do cypress

        // comboxes ou select -> select
        cy.get('[data-qa="days"]').select('20')
        cy.get('[data-qa="months"]').select('May')
        cy.get('[data-qa="years"]').select('1990')

        //selecionando os checkbox´s
        cy.get('#newsletter').check() //cy.get('input[type=checkbox]#newsletter').check()
        cy.get('#optin').check() //cy.get('input[type=checkbox]#optin').check()

        //preenchendo o formulário de dados pessoais
        cy.get('[data-qa="first_name"]').type(faker.person.firstName()) //'input#first_name' -> Outra formas de selecionar
        cy.get('[data-qa="last_name"]').type(faker.person.lastName()) // 'input#last_name' -> Outra formas de selecionar
        cy.get('input#company').type(faker.company.name())
        cy.get('input#address1').type(faker.location.streetAddress())
        cy.get('input#address2').type('Rua teste 2, 200')
        cy.get('select#country').select('Canada')
        cy.get('input#state').type(faker.location.state())
        cy.get('input#city').type(faker.location.city())
        cy.get('input#zipcode').type(faker.location.zipCode())
        cy.get('input#mobile_number').type('+55 11 99999-9999')

        // Action - ação de submeter o formulário
        cy.get('[data-qa="create-account"]').click()

    }
}

export default new Cadastro()   