##encoding: UTF-8
##language: pt

Funcionalidade:  INSERÇÃO DE UM DOCUMENTO EM MÚLTIPLAS BLOCKCHAINS
    SistemaOrg quer inserir as informações de um documento
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
    E ele acessa a rota '/write_contract_multi'
    E ele preenche as informações do documento: 'idContract'
                                                'valueAttributes'
                                                'notFaultTolerance'                                            
    Quando ele confirmar as informações
    Então informará um 'idDocument' para cada documento em Blockchain atrelado a um 'idGroup'

Cenário: 'idContract' REPETIDOS
    E ele solicita o token na rota '/token'
    E ele insere o 'orgKey'
    E ele recebe recebe o 'tokenAccess' onde é colocodo diretamente no 'Header'
    E ele insere uma 'Key': 'Authorization'
    E ele insere um 'Token': 'tokenAccess'
    Quando ele confirmar as informações
    E ele acessa a rota /write_contract_multi
    E ele preenche as informações do documento: 'idContract'
                                                'valueAttributes'
                                                'notFaultTolerance'     
    Quando ele confirmar as informações
    Então informará que um 'idDocument' encontra-se repetido.

Cenário: PARAMÊTROS VAZIOS TOKEN
    E ele solicita o token na rota '/token'
    E ele NÃO insere o 'orgKey'
    E ele recebe recebe o 'tokenAccess' onde é colocodo diretamente no 'Header'
    E ele NÃO insere uma 'Key': 'Authorization'
    E ele NÃO insere um 'Token': 'tokenAccess'
    Quando ele confirmar as informações
    Então informará que os parametros estão vazios (attNotNull)

Cenário: PARAMÊTROS VAZIOS INFORMAÇÕES DO DOCUMENTO
    E ele acessa a rota '/write_contract_multi'
    E ele NÃO preenche as informações do documento: 'idContract'
                                                    'valueAttributes'
                                                    'notFaultTolerance'     
    Quando ele confirmar as informações
    Então informará que os parametros estão vazios (attNotNull)

Cenário: ERRO DE INSERÇÃO EM ALGUMA BLOCKCHAIN
    E ele acessa a rota '/write_contract_multi'
    E ele preenche as informações do documento: 'idContract'
                                                'valueAttributes'
                                                'notFaultTolerance'                                            
    Quando ele confirmar as informações
    Então ele é alertado que há problemas de inserção na Blockchain e entra na lista  "returnCode": "failed"

Cenário: INSERÇÃO EM OUTRA BLOCKCHAIN
    Quando ele confirmar as informações
    E ele acessa a rota '/write_contract_multi'
    E ele preenche as informações do documento: 'idContract'
                                                'valueAttributes'
                                                'notFaultTolerance'                                            
    Quando ele confirmar as informações
    Então é alertado que a Blockchain de escolha encontra-se instável e pode escolher:
    E ele digita 'True' e serão canceladas ou 'False' e irá prosseguir em outra Blockchain
    Quando ele confirmar as escolhas
    Então informará um 'idDocument' para cada documento em Blockchain atrelado a um 'idGroup'




