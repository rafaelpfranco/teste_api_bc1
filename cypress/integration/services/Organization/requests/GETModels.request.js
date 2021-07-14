// verbo/metodo - endpoint . motivo (request) . extensao
/// <reference types="cypress" />

function allModels(){
    // cy.request - client http
    return cy.request({
        method: 'POST',
        url: 'get_models',
        failOnStatusCode: false,
    })
}

export { allModels };