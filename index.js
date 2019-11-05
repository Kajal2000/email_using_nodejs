var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kajal18@navgurukul.org',
    pass: ''
  }
});
var mailOptions = {
  from: 'kajal18@navgurukul.org',
  to: 'zeba18@navgurukul.org',
  subject: 'I WANT TO DO PEERLEARNING WITH YOU',
  text: 'how was your email code can you tell me finnaly i sloved my error now i am if you will got me please reply me '
};

transporter.sendMail(mailOptions, function(error, res){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ', res);
  }
});