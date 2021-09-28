##encoding: UTF-8
##language: pt

Funcionalidade: Ler documentos
    Como um usuario do SistemaOrg
    "Tester" quer ler documentos
    Para que ele possa receber informações do documento desejado

Contexto:  
    Dado que "Tester" possui o SistemaOrg cadastrado
    E com um token de acesso para interagir com a rota
    E ter criado um modelo
    E realizado deploy de um contrato com alguma informação
    E quer ler documentos

Cenario: Ler documentos HAPPY DAY
    Quando o usuario estiver com os pré-requisitos prontos
    Quando ele deve inserir os seguintes campos:
        idContract
        idDocument
    Então a API deve retornar o campo result
    E o mapeamento do attributes
    E informações do attributesValues
    Então o retorno deve ter o formato 
    . "result": {“idInternal”: "idInternal01", “hash”: “hash01”, "title": "title01", "sector": "sector01", "place": "place01", "hashDocument": "hashDocument01", "timestamp": "10000000"}.

Cenario: Ler documento com diferentes modelos HAPPYDAY
    Quando o usuario estiver com os pré-requisitos prontos
    Quando ele deve inserir os seguintes campos para a rota /read_contract_models:
        idContract
        idDocument
    Então a API deve retornar o campo result
    E o mapeamento do attributes
    E informações do attributesValues
    Então o retorno deve ter o formato 
    . "result": {“idInternal”: "idInternal01", “hash”: “hash01”, "title": "title01", "sector": "sector01", "place": "place01", "hashDocument": "hashDocument01", "timestamp": "10000000"}.


Cenario: Ler documentos inexistentes
    Quando o usuario estiver com os pré-requisitos prontos
    Quando ele deve inserir os seguintes campos não existentes:
        idContract
        idDocument
    Então a API deve retornar uma mensagem para SistemaOrg