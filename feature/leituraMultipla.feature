##encoding: UTF-8
##language: pt

Funcionalidade:  LEITURA DE UM DOCUMENTO EM MÚLTIPLAS BLOCKCHAINS
    SistemaOrg quer realizar a leitura de um documento
    Para que consiga inserir um mesmo documento em diferentes blockchains

Contexto: 
    Dado que SistemaOrg quer inserir informações de um documento em diferentes blockchains

Cenário: HAPPY DAY
    E ele solicita o token na rota '/token'
    E ele insere o 'orgKey'
    E ele recebe recebe o 'tokenAccess' onde é colocodo diretamente no 'Header'
    E ele insere uma 'Key': 'Authorization'
    E ele insere um 'Token': 'tokenAccess'
    Quando ele confirmar as informações
    E ele acessa a rota '/read_contract_multi'
    E ele preenche as informações do documento: 'idDocument'*
                                                'listDocuments'     
    Quando ele confirmar as informações
    Então será exibido o respectivo documento para realização da leitura

Cenário: 'listDocuments' INFORMADO
    E ele acessa a rota '/read_contract_multi'
    E ele preenche as informações do documento: 'idDocument'*
                                                'listDocuments'     
    Quando ele confirmar as informações
    Então será exibido todos os documentos referentes para realização da leitura
 
Cenário: 'idDocument' VAZIO 
    E ele acessa a rota '/read_contract_multi'
    E ele NÃO preenche as informações do documento: 'idDocument'*
                                                'listDocuments'     
    Quando ele confirmar as informações
    Então será retornado uma mensagem de erro para o SistemaOrg