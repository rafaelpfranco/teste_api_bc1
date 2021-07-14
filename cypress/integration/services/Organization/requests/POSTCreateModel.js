/// <reference types="cypress" />

const payloadAddOrg = require('../payloads/add-model.json');

function criarModel(){
    return cy.request({
        method: 'POST',
        url: 'create_model',
        failOnStatusCode: false,
        headers: {
            "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg0LCJrZXkiOiJiZnhhbGtyMnF3eGI4IiwiaWRfb3JnIjo2ODR9.W3xpKKIH9UQvN82AZDD5hP3bXBq-sM2y1HX0pj9s5bM"
        },
        body: payloadAddOrg
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
        body: payloadAddOrg
    })
}
function criarModelSemParemetro(){
    return cy.request({
        method: 'POST',
        url: 'create_model',
        failOnStatusCode: false,
        headers: {
            "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg0LCJrZXkiOiJiZnhhbGtyMnF3eGI4IiwiaWRfb3JnIjo2ODR9.W3xpKKIH9UQvN82AZDD5hP3bXBq-sM2y1HX0pj9s5bM"
        },
        body: {

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
function gerarTokenComParametrosVazios(){
    return cy.request({
        method: 'POST',
        url: 'token',
        failOnStatusCode: false,
        body: {
            "blockchain": "",
            "description": "",
            "attributes": ""
        }
    })
}

export { criarModel };
export { criarModelComTokenInvalido };
export { criarModelSemParemetro };
export { gerarTokenComParametrosVazios };
