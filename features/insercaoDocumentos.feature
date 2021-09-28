##encoding: UTF-8
##language: pt

Funcionalidade: Inserção documentos
    Como um usuario do SistemaOrg
    "Tester" quer inserir documentos
    Para que ele possa inserir o documento desejado

Contexto:  
    Dado que "Tester" possui o SistemaOrg cadastrado
    E com um token de acesso para interagir com a rota
    E ter criado um modelo
    E realizado deploy de um contrato com alguma informação
    E quer inserir documentos

Cenario: Inserção documentos HAPPY DAY
    Quando o usuario estiver com os pré-requisitos prontos
    Quando ele deve inserir os seguintes campos:
        idContract
        valueAttributes
    Então a API deve retornar os seguintes campos:
        blockchain
        idDocument
        blockNumber
        txId.

Cenario: Inserção documentos multiplos modelos para um contrato HAPPPYDAY
    Quando o usuario estiver com os pré-requisitos prontos
    Quando ele deve inserir os seguintes campos para a rota /write_contract_models:
        idContract
        valueAttributes
        modelCode
    Então a API deve retornar os seguintes campos:
        blockchain
        idDocument
        blockNumber
        txId.

Cenario: Inserção documentos multiplos modelos para um contrato onde modelCode não existe
    Quando o usuario estiver com os pré-requisitos prontos
    Quando ele deve inserir os seguintes campos para a rota /write_contract_models:
        idContract
        valueAttributes
        modelCode
    Então a API deve retornar um erro

Cenario: Inserção documentos com falha na blockchain
    Quando o usuario estiver com os pré-requisitos prontos
    Quando ele deve inserir os seguintes campos para a rota /write_contract_models:
        idContract
        valueAttributes
    E a blockchain não consegur registrar o contrato
    Então a API deve retornar um erro
    E não inserir os dados offchain

Cenario: Inserção documentos nulos com parametro obrigatorio attNotNull
    Quando o usuario estiver com os pré-requisitos prontos
    Quando ele deve inserir os seguintes campos no formato: ("example": " ") para a rota /write_contract_models:
        idContract
        valueAttributes
        modelCode
    Então a API deve retornar um erro

Cenario: Inserção documentos com requisição mal formatada
    Quando o usuario estiver com os pré-requisitos prontos
    Quando ele deve inserir os seguintes campos no formato: ("example": ) para a rota /write_contract_models:
        idContract
        valueAttributes
        modelCode
    Então a API deve retornar um erro

Cenario: Inserção documentos com campo não preenchido com parametro obrigatorio attNotNull
    Quando o usuario estiver com os pré-requisitos prontos
    Quando ele deve inserir os seguintes campos no formato: (null)  para a rota /write_contract_models:
        idContract
        valueAttributes
        modelCode
    Então a API deve retornar um erro
