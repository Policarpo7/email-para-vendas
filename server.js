const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '.')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/sendEmail', async (req, res) => {
    const { product, price, address, clientEmail } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'youremail@outlook.com',
            pass: 'password',
        },
    });

    const mailOptions = {
        from: 'youremail@outlook.com',
        to: 'youremail@outlook.com',
        replyTo: clientEmail, // Adiciona o e-mail do cliente como remetente para resposta
        subject: 'Novo pedido',
        text: `Produto: ${product}\nValor pago: ${price}\nEndereço de entrega: ${address}\nE-mail do cliente: ${clientEmail}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Pedido enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
        res.status(500).send('Erro ao enviar o pedido.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
