import * as POSTCreateOrg from '../requests/POSTCreateModel.js';

context('POST Create Model', () => {
    it('Criar um modelo de contrato', () => {
        POSTCreateOrg.criarModel().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.result.message).to.eq("modelo criado com sucesso!");
            expect(response.body.result.returnCode).to.eq("success");
            expect(response.body.result["model code"]).not.be.null;
        })
    });
    it('Criar um modelo com token inválido', () => {
        POSTCreateOrg.criarModelComTokenInvalido().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("TOKEN_INVALIDO");
            expect(response.body.result.returnCode).to.eq("failure");
            expect(response.body.result.message).to.eq("Preencha o cabeçalho Authorization com um token válido!");
        })
    });
    //rever esses parametros
    it('Criar um modelo sem parametros insuficientes', () => {
        POSTCreateOrg.criarModelSemParemetro().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
        })
    });
    it('Criar um modelo com paramentros vazios', () => {
        POSTCreateOrg.gerarTokenComParametrosVazios().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
        })
    });
});
