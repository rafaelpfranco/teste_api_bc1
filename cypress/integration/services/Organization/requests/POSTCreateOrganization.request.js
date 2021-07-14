/// <reference types="cypress" />

const payloadAddOrg = require('../payloads/add-organization.json');

function addOrganization(){
    return cy.request({
        method: 'POST',
        url: 'create_organization',
        failOnStatusCode: false,
        body: payloadAddOrg
    })
}
function addOrganizationSemParemetro(){
    return cy.request({
        method: 'POST',
        url: 'create_organization',
        failOnStatusCode: false,
    })
}
function addOrganizationComParametroVazio(){
    return cy.request({
        method: 'POST',
        url: 'create_organization',
        failOnStatusCode: false,
        body: {
            "name": "Org Teste",
          "address": ""
        }
    })
}


export { addOrganization };
export { addOrganizationSemParemetro };
export { addOrganizationComParametroVazio };