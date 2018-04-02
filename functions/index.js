const functions = require('firebase-functions');
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.get('/send',function(req,res){
    var transporter = nodemailer.createTransport({  
        host: 'smtpout.secureserver.net',
        secureConnection: true,
        port: 465,
        auth: {
            user: 'jeferson@hrtechsolutions.com.br',
            pass: '#Solutions1' 
        }
      });

      var to = req.query.to;
      var name = req.query.name;
      var type = req.query.type;

      var templateB2B = `<div style="padding:70px; margin: 40px; ">
      <p style="font-family:Arial, sans-serif; font-size:1.5em; color:#666666;">Olá, ${name}. Tudo bem?</p>
      <p style="font-family:Arial, sans-serif; font-size:1.5em; color:#666666;">Primeiramente, agradecemos por responder a nossa pesquisa.</p>
      <p style="font-family:Arial, sans-serif; font-size:1.5em; color:#666666;">Este é um e-mail de confirmação, em breve, você receberá GRATUITAMENTE um infográfico para lhe guiar a criar processos melhores de seleção de candidatos com as informações coletadas.</p>
      <p style="font-family:Arial, sans-serif; font-size:1.5em; color:#666666;">Conte conosco para ajudar você nos processos de recrutamento!</p>
      <p style="font-family:Arial, sans-serif; font-size:1.5em; color:#666666;">Atenciosamente,
        <br/>
      Equipe da HR Tech Solutions</p>
      <img src="https://hrtechsolutions.com.br/img/hr-logo.png">
      </div>`;

      var templateB2C = `<div style="padding:70px; margin: 40px; ">
      <p style="font-family:Arial, sans-serif; font-size:1.5em; color:#666666;">Olá, ${name}. Tudo bem?</p>
      <p style="font-family:Arial, sans-serif; font-size:1.5em; color:#666666;">Primeiramente agradecemos por responder a nossa pesquisa. </p>
      <p style="font-family:Arial, sans-serif; font-size:1.5em; color:#666666;">Este é um e-mail de confirmação, em breve, você receberá GRATUITAMENTE um infográfico para lhe guiar nos processos de recrutamento das empresas.</p>
      <p style="font-family:Arial, sans-serif; font-size:1.5em; color:#666666;">Conte conosco para ajudar você nos processos de recrutamento!</p>
      <p style="font-family:Arial, sans-serif; font-size:1.5em; color:#666666;">Atenciosamente,
        <br/>
      Equipe da HR Tech Solutions</p>
      <img src="https://hrtechsolutions.com.br/img/hr-logo.png">
      </div>`;
     
      var template = type === 'B2B' ? templateB2B : templateB2C;
      var subject = 'Obrigado por preencher nossa pesquisa'
      var mailOptions = {
        from: 'jeferson@hrtechsolutions.com.br',
        to: to,
        subject: subject,
        html: template
      };
  
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          //_sendMail('jeferson@hrtechsolutions.com.br', template, `Erro ao enviar e-mail para ${to}`);
          res.send(error);
        } else {
          res.send('ok');
        }
      });
});

exports.app = functions.https.onRequest(app);