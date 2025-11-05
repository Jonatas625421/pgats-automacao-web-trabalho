class produtos {
    pesquisarProdutos(){
        cy.visit('https://automationexercise.com/')
        
        cy.get('a[href="/products"]').click()
        cy.get('input#search_product').type('Blue Top')
        cy.get('button#submit_search').click()
        
    }
}

export default new produtos()