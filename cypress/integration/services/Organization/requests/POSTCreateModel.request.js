/// <reference types="cypress" />

const payloadAddModel = require('../payloads/add-model.json');
const payloadAddToken = require('../payloads/token-header.json');

function criarModel(){
    return cy.request({
        method: 'POST',
        url: 'create_model',
        failOnStatusCode: false,
        headers:payloadAddToken,
        body: payloadAddModel
    })
}
function criarModelComTokenInvalido(){
    return cy.request({
        method: 'POST',
        url: 'create_model',
        failOnStatusCode: false,
        headers: {
            "Authorization": "JWT eyJ0e32XAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg0LCJrZXkiOiJiZnhhbGtyMnF3eGI4IiwiaWRfb3JnIjo2ODR9.W3xpKKIH9UQvN82AZDD5hP3bXBq-sM2y1HX0pj9s5bM"
        },
        body: payloadAddModel
    })
}
function criarModelSemParemetro(){
    return cy.request({
        method: 'POST',
        url: 'create_model',
        failOnStatusCode: false,
        headers: payloadAddToken,
        body: {}
    })
}
function gerarTokenComParametrosVazios(){
    return cy.request({
        method: 'POST',
        url: 'token',
        failOnStatusCode: false,
        headers: payloadAddToken,
        body: {
            "description": "",
            "attributes": ""
        }
    })
}

export { criarModel };
export { criarModelComTokenInvalido };
export { criarModelSemParemetro };
export { gerarTokenComParametrosVazios };
