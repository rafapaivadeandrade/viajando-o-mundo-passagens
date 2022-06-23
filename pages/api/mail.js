const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const message = `
    Nome: ${body.name}\r\n
    Email: ${body.email}\r\n
    Cidade de Origem: ${body.fields.city}\r\n
    Cidade de Destino: ${body.fields.cityDestiny}\r\n
    Data de Ida: ${body.fields.dateGoing}\r\n
    Data de Volta: ${body.fields.dateBack}\r\n
    Estado: ${body.fields.state}\r\n
    Contato: ${body.fields.contact}\r\n
    Mensagem: ${body.message}\r\n
  `;
  const data = {
    to: `viajandoomundopassagens@gmail.com`,
    from: 'viajandoomundopassagens@viajandoomundo.com',
    subject: 'Contato Sobre Passagem',
    text: message
  }

  mail.send(data);

  res.status(200).json({ status: 'E-mail enviado com sucesso' })
}
