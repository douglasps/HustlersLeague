var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({  
  //service: 'Godaddy',
  host: 'smtpout.secureserver.net',//'smtpout.secureserver.net',
  secureConnection: true,
  port: 465,
  auth: {
      user: 'jeferson@hrtechsolutions.com.br',
      pass: '#Solutions1' 
  }
});

var mailOptions = {
  from: 'jeferson@hrtechsolutions.com.br',
  to: 'douglasps95@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});