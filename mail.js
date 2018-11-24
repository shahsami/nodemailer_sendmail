//first on ur console type "npm init" it will generate the package.json file
//then "npm install --save nodemailer" and "npm install --save sendmail"


var nodemailer = require('nodemailer');
var sendmail = require('sendmail');
 
var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'nguyendinhhung1021998@gmail.com',
        pass: 'dinhhung102'
    }
});

 
sendmail({
    from: 'nguyendinhhung1021998@gmail.com',
    to: 'Songthanh178@gmail.com',
    subject: 'test sendmail',
    text: 'Mail of test sendmail ',
  }, function(err, reply) {
    console.log(err && err.stack);
});
 
transporter.sendMail(sendmail, function(err, info){
  if (err) {
    console.log('noo error');
  } else {
    console.log('Email sent: ' + info.response);
  }
});
        