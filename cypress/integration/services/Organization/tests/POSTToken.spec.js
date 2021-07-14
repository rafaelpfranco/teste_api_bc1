import * as POSTCreateOrg from '../requests/POSTToken.js';

context('POST Token', () => {
    it('Criar um token de acessos', () => {
        POSTCreateOrg.gerarToken().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.returnCode).to.eq("success");
            expect(response.body.tokenAccess).not.be.null;
        })
    });
    it('Criar um token de acessos com orgKey inválido', () => {
        POSTCreateOrg.gerarTokenComOrgKeyInvalido().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CODIGO_INVÁLIDO");
            expect(response.body.result.message).to.eq("por favor digite um código válido!");
        })
    });
    it('Criar um token de acessos com orgKey vazio', () => {
        POSTCreateOrg.gerarTokenComOrgKeyVazio().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
        })
    });
    it('Criar um token de acessos sem parametro', () => {
        POSTCreateOrg.gerarTokenSemParametro().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
        })
    });
});
