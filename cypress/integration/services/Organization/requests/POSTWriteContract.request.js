/// <reference types="cypress" />

const payloadAddContract = require('../payloads/add-doc.json');
const payloadAddToken = require('../payloads/token-header.json');

function criarDocumento(){
    return cy.request({
        method: 'POST',
        url: 'write_contract',
        failOnStatusCode: false,
        headers:payloadAddToken,
        body: payloadAddContract
    })
}

function criarDocumentoComTokenInvalido(){
    return cy.request({
        method: 'POST',
        url: 'write_contract',
        failOnStatusCode: false,
        headers: {
            "Authorization": "JWT eyJ0e31232XAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg0LCJrZXkiOiJiZnhhbGtyMnF3eGI4IiwiaWRfb3JnIjo2ODR9.W3xpKKIH9UQvN82AZDD5hP3bXBq-sM2y1HX0pj9s5bM"
        },
        body: payloadAddContract
    })
}

function criarDocumentoComParemetrosVazios(){
    return cy.request({
        method: 'POST',
        url: 'write_contract',
        failOnStatusCode: false,
        headers:payloadAddToken,
        body: {
            "idContract": "",
            "value" : [""]
        }
    })
}

function criarDocumentoSemParemetrosVazios(){
    return cy.request({
        method: 'POST',
        url: 'write_contract',
        failOnStatusCode: false,
        headers:payloadAddToken,
        body: {}
    })
}

export { criarDocumento };
export { criarDocumentoComTokenInvalido };
export { criarDocumentoComParemetrosVazios };
export { criarDocumentoSemParemetrosVazios };
