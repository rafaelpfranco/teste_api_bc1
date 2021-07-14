import * as GETModels from '../requests/GETModels.request';

describe('GET Models', () => {
    it('Listar todos os modelos', () => {
        GETModels.allModels().should((response) => {
            /* cy.log(response.status)
            cy.log(response.statusText)
            cy.log(response.body) */
            expect(response.status).to.equal(200);
            expect(response.body).to.be.not.null;
        })
    });
});