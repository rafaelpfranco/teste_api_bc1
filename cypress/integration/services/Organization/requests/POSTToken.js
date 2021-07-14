/// <reference types="cypress" />

const payloadAddOrg = require('../payloads/token-acesso.json');

function gerarToken(){
    return cy.request({
        method: 'POST',
        url: 'token',
        failOnStatusCode: false,
        body: payloadAddOrg
    })
}
function gerarTokenComOrgKeyInvalido(){
    return cy.request({
        method: 'POST',
        url: 'token',
        failOnStatusCode: false,
        body: {
            "orgKey": "qopwkeqwpkoe"
        }
    })
}
function gerarTokenComOrgKeyVazio(){
    return cy.request({
        method: 'POST',
        url: 'token',
        failOnStatusCode: false,
        body: {
            "orgKey": ""
        }
    })
}
function gerarTokenSemParametro(){
    return cy.request({
        method: 'POST',
        url: 'token',
        failOnStatusCode: false,
        body: {
            
        }
    })
}

export { gerarToken };
export { gerarTokenComOrgKeyInvalido };
export { gerarTokenComOrgKeyVazio };
export { gerarTokenSemParametro };
