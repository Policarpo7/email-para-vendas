**Loja Exemplo**

Este repositório contém uma simples aplicação de loja exemplo que utiliza Node.js, Express e Nodemailer para enviar e-mails de confirmação de pedidos.
Arquivos

    server.js: O arquivo do servidor que cria um servidor Express e define rotas para lidar com as requisições.
    index.html: A página principal da loja, onde os clientes podem preencher um formulário com informações do produto, preço, endereço de entrega e e-mail.

**Funcionalidade**

**server.js**

O server.js cria um servidor Express e define duas rotas:

    GET /: Esta rota serve a página index.html.
    POST /sendEmail: Esta rota é chamada quando um cliente finaliza a compra. Ela recebe informações do pedido e do e-mail do cliente e envia um e-mail de confirmação para o e-mail do proprietário da loja.

O servidor usa o módulo nodemailer para enviar e-mails através do serviço de e-mail do Outlook. Você deve substituir as credenciais de autenticação (user e pass) pelas suas próprias credenciais do Outlook.

**index.html**

O index.html contém um simples formulário HTML onde os clientes podem inserir informações sobre o produto, preço, endereço de entrega e e-mail. Quando o cliente preenche o formulário e clica no botão "Finalizar compra", uma função JavaScript (sendOrderConfirmation) é chamada para enviar uma requisição POST para a rota /sendEmail no servidor.

A função sendOrderConfirmation envia as informações do pedido e do e-mail do cliente para o servidor, que então envia um e-mail de confirmação para o e-mail do proprietário da loja.

**Instalação e execução**

    Clone este repositório e navegue até a pasta clonada.
    Instale as dependências executando npm install.
    Substitua as credenciais de e-mail no arquivo server.js pelas suas próprias credenciais do Outlook.
    Inicie o servidor executando node server.js.
    Abra um navegador e acesse http://localhost:3000 para visualizar a página da loja.

**Contribuindo**

Sinta-se à vontade para fazer um fork deste repositório e enviar Pull Requests com melhorias e correções de bugs.
