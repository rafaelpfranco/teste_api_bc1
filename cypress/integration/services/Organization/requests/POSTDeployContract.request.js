/// <reference types="cypress" />

const payloadAddContract = require('../payloads/add-contract.json');
const payloadAddToken = require('../payloads/token-header.json');

function criarContrato(){
    return cy.request({
        method: 'POST',
        url: 'deploy_contract',
        failOnStatusCode: false,
        headers:payloadAddToken,
        body: payloadAddContract
    })
}
function criarContratoComTokenInvalido(){
    return cy.request({
        method: 'POST',
        url: 'create_model',
        failOnStatusCode: false,
        headers: {
            "Authorization": "JWT eyJ1230e32XAi123OiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg0LCJrZXkiOiJiZnhhbGtyMnF3eGI4IiwiaWRfb3JnIjo2ODR9.W3xpKKIH9UQvN82AZDD5hP3bXBq-sM2y1HX0pj9s5bM"
        },
        body: payloadAddContract
    })
}
function criarContratoComBlockchainVazio(){
    return cy.request({
        method: 'POST',
        url: 'deploy_contract',
        failOnStatusCode: false,
        headers:payloadAddToken,
        body: {
            "blockchain":"",
            "model":"15i2gyxb6kkr0s0lcz"
        }
    })
}
function criarContratoComModeloVazio(){
    return cy.request({
        method: 'POST',
        url: 'deploy_contract',
        failOnStatusCode: false,
        headers:payloadAddToken,
        body: {
            "blockchain":"0",
            "model":""
        }
    })
}
function criarContratoSemParemetro(){
    return cy.request({
        method: 'POST',
        url: 'deploy_contract',
        failOnStatusCode: false,
        headers:payloadAddToken,
        body: {}
    })
}

export { criarContrato };
export { criarContratoComTokenInvalido };
export { criarContratoComBlockchainVazio };
export { criarContratoComModeloVazio };
export { criarContratoSemParemetro };

