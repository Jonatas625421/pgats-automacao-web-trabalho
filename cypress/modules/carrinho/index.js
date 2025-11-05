
class carrinho {

        verificarTodosProdutosDaPaginaESeusDetalhes () {
        
        cy.visit('https://automationexercise.com/')
        cy.get('a[href="/products"]').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        
        }

}

export default new carrinho()