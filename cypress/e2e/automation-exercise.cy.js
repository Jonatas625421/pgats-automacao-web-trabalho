/// <reference types="cypress" />    

 import userData from '../fixtures/example.json'
 import {
    getRandomNumber,
    getRandomEmail
 } from '../support/helpers'       

import { faker } from '@faker-js/faker'

describe('Automation Exercise', () => {
    
    beforeEach(() =>{
        //cy.viewport('iphone-xr')      
        cy.visit('https://automationexercise.com/')
        cy.get('a[href="/login"]').click()
        // navegarParaLogin()
    });
    
    it('Examples de Logs', () =>{
        cy.log(`STEP 1 :: PGATS AUTOMACAO WEB CY LOG`)
        cy.log(`STEP 1 :: PGATS AUTOMACAO WEB CY LOG`)

        cy.log(`getRandomNumber: ${getRandomNumber()}`)
        cy.log(`getRandomEmail: ${getRandomEmail()}`)

        cy.log(`Dog Bread: ${ faker.animal.dog() }`)
        cy.log(`Dog bread: ${ faker.animal.cat() }`)

        console.log('PGATS AUTOMACAO WEB CONSOLE LOG')
    })
    
    it('Caso de teste 1: Cadastrar um usuário', () => {  
        //Recurso usado para gerar um email único a cada execução e não travar a execução
        const timestamp = new Date().getTime()
        

        // preencher o formulário de cadastro de login e senha
        cy.get('[data-qa="signup-name"]').type('testador QA')
        cy.get('[data-qa="signup-email"]').type(`email${timestamp}@teste99.com`)
        
        cy.contains('button', 'Signup').click( )

        // preencherFormularioDePreCadastro()

        //Outras formas de selecionar ou check do radio button das seleções abaixo
        cy.get('#id_gender1').check()
        //cy.get('input[value="Mr"]').check()

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

        // Assert - validação que estamos na página correta e o usuário foi criado com sucesso!
        cy.url().should('includes', 'account_created')  // validando o texto da URL
        cy.contains('b', 'Account Created!').should('be.visible') // validando o texto na página
       
    })

    // Exercício para fixar conhecimentos
    it('Caso de teste 2: Login de Usuário com email e senha corretos', () => {

        
        cy.get('[data-qa="login-email"]').type(`email1761602857810@teste99.com`)
        cy.get('[data-qa="login-password"]').type(`teste99`)

        cy.get('[data-qa="login-button"]').click()

        cy.get('a[href="/delete_account"]').should('be.visible') // validando o texto na página
        cy.contains('b', 'testador QA') // validando o texto na página
        cy.contains('Logged in as testador QA').should('be.visible')

        //cy.get('i.fa-user', { timeout: 10000 }).should('exist')
        //cy.get('i.fa-user').parent().should('contain', 'testador QA') // validando o texto na página
        //cy.get('a[href="/logout"]').should('be.visible') // validando o texto na página)

        cy.contains(`Logged in as testador QA`).should('be.visible')
        cy.contains(`Logged in as testador QA`).should('be.visible')
    })

    // Interação com Upload de arquivos
    it('Caso de teste 3: Login de Usuário com e-mail e senha incorretos',()=> {

        cy.get('[data-qa="login-email"]').type(`email1761602857810@teste990.com`)
        cy.get('[data-qa="login-password"]').type(`teste99`)

        cy.get('[data-qa="login-button"]').click()

        //asserts
        cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!')

        //cy.get('.status').should('be.visible')
        //cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')

    })

    it('Caso de teste 4: Logout de Usuário',()=> {
    
        cy.get('[data-qa="login-email"]').type(`email1761602857810@teste99.com`)
        cy.get('[data-qa="login-password"]').type(`teste99`)
    
        cy.get('[data-qa="login-button"]').click()
    
        // Assert - validação que estamos na página correta e o usuário foi criado com sucesso!
        cy.get('a[href="/delete_account"]').should('be.visible') // validando o texto na página
        cy.contains('b', 'testador QA') // validando o texto na página
            
        //Act
        cy.get('a[href="/logout"]').should('be.visible').click()
            
        //Assert
        cy.url().should('contain', 'login')  // validando o texto da URL
    
    })

    it('Caso de teste 5: Cadastrar usuário com e-mail existente no sistema',()=> {
        
        cy.visit('https://automationexercise.com/')
        cy.url().should('contain', 'https://automationexercise.com/')
        cy.get('a[href="/login"]').click()
        cy.get('.signup-form > h2').should('be.visible')
    
        cy.get('[data-qa="signup-name"]').type('testador QA')
        cy.get('[data-qa="signup-email"]').type(`email1761602857810@teste99.com`)
        cy.get('[ data-qa="signup-button"]').click( )

        //assert
        cy.get('.signup-form > form > p').should('contain', 'Email Address already exist!')
    
    })

    it('Caso de teste 6: Formulário de contato',()=> {

        cy.visit('https://automationexercise.com/')

        cy.url().should('contain', 'https://automationexercise.com/')
        cy.get('a[href="/contact_us"]').click()
        cy.url().should('contain', 'https://automationexercise.com/contact_us')
        cy.get('[data-qa="name"]').type(userData.name)
        cy.get('[data-qa="email"]').type(userData.email)
        cy.get('[data-qa="subject"]').type('userData.subject')
        cy.get('[data-qa="message"]').type('userData.message')
        
        //Anexando um arquivo no teste
        cy.fixture('example.json').as('arquivo')
        cy.get('input[type=file]').selectFile('@arquivo')
        cy.get('[data-qa="submit-button"]').click()
        
        // asserts
        cy.get('.status').should('be.visible')
        cy.get('.status').should('have.text','Success! Your details have been submitted successfully.')
        
    })
    
     it('Caso de teste 8: Verificar todos os produtos e a página de detalhes do produto',()=> {

        cy.visit('https://automationexercise.com/')

        cy.url().should('contain', 'https://automationexercise.com/')
        cy.get('a[href="/products"]').click()
        cy.url().should('contain', 'https://automationexercise.com/products')
        cy.get('.brands_products > h2').should('be.visible')
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information > :nth-child(3)').should('be.visible')
        cy.get(':nth-child(5) > span').should('be.visible')
        cy.get('.product-information > :nth-child(6)').should('be.visible')
        cy.get('.product-information > :nth-child(7)').should('be.visible')
        cy.get('.product-information > :nth-child(8)').should('be.visible')
        
    })

     it('Caso de teste 9: Pesquisar produto',()=> {

        cy.visit('https://automationexercise.com/')
        
        cy.url().should('contain', 'https://automationexercise.com/')
        cy.get('a[href="/products"]').click()
        cy.url().should('contain', 'https://automationexercise.com/products')
        cy.get('input#search_product').type('Blue Top')
        cy.get('button#submit_search').click()
        cy.get('.title').should('be.visible')
        cy.get('.productinfo > p').should('be.visible')
        
    })

    it('Caso de teste 10: Verificar assinatura na página inicial',()=> {

        cy.visit('https://automationexercise.com/')

         cy.url().should('contain', 'https://automationexercise.com/')
         cy.get('.single-widget > h2').should('be.visible')
         cy.get('#susbscribe_email').type(`email1761602857810@teste99.com`)
         cy.get('#subscribe').click()
         cy.get('.alert-success').should('be.visible')
        
        
    })

    it.only('Caso de teste 15: Fazer pedido: Registrar antes de finalizar a compra',()=> {
         const timestamp = new Date().getTime() 

         cy.visit('https://automationexercise.com/')

         cy.url().should('contain', 'https://automationexercise.com/')
         cy.get('a[href="/login"]').click()
         cy.get('[data-qa="signup-name"]').type(`John tester`)
         cy.get('[data-qa="signup-email"]').type(`email${timestamp}@teste999.com`)
         cy.contains('button', 'Signup').click( ) 

         //selecionando radio buttons
         cy.get('input[type=radio]').check('Mr')
         cy.get('input#password').type('teste999', {log: false}) //escondendo a senha do log na execução do cypress
   
         // comboxes ou select -> select
         cy.get('[data-qa="days"]').select('21')
         cy.get('[data-qa="months"]').select('May')
         cy.get('[data-qa="years"]').select('1992')

         //selecionando os checkbox´s
         cy.get('#newsletter').check() //cy.get('input[type=checkbox]#newsletter').check()
         cy.get('#optin').check() //cy.get('input[type=checkbox]#optin').check()


         //preenchendo o formulário de dados pessoais
         cy.get('[data-qa="first_name"]').type('testador') //'input#first_name' -> Outra formas de selecionar
         cy.get('[data-qa="last_name"]').type('QA') // 'input#last_name' -> Outra formas de selecionar
         cy.get('input#company').type('empresa Capivara LTDA')
         cy.get('input#address1').type('Rua teste, 100')
         cy.get('input#address2').type('Rua teste 2, 200')
         cy.get('select#country').select('Canada')
         cy.get('input#state').type('Estado teste')
         cy.get('input#city').type('Cidade teste')
         cy.get('input#zipcode').type('00000-000')
         cy.get('input#mobile_number').type('+55 11 99999-9997')

         // Action - ação de submeter o formulário
         cy.get('[data-qa="create-account"]').click()   

        // Assert
        cy.get('b').should('contain', 'Account Created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
        
        cy.get('a[href="/products"]').click()
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-body > :nth-child(1)').should('be.visible')
        cy.get('u').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('textarea.form-control').type('Quero meu pedido embalado para presente')
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type('Zezinho be QA')
        cy.get('[data-qa="card-number"]').type('4111 1111 1111 1111')    
        cy.get('[data-qa="cvc"]').type('456')
        cy.get('[data-qa="expiry-month"]').type('12/26')
        cy.get('[data-qa="expiry-year"]').type('2026')
        cy.get('[data-qa="pay-button"]').click()
        cy.get('.col-sm-9 > p').should('be.visible')
        cy.get(':nth-child(5) > a').click()
        cy.get(':nth-child(5) > a').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()


       


       
  
        
    })



})