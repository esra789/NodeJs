const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'isramadssia23@gmail.com',
      pass: 'iqcm hzrv yjwv ssao'
    }
  });
  
  var mailOptions = {
    from: 'isramadssia23@gmail.com',
    to: 'rdchokri2003@gmail.com',
    subject: 'funny',
    html:'<h1>hello </h1>\n<p>the one who lives<p/>\n'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });