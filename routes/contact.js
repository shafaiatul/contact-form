
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
/*POST request from contact page by clicking send button to send the name, email and message to gmail account */
router.post('/send', function (req, res, next) {
	var transporter = nodemailer.createTransport ({ //nodemailer has its own API
		//providing gmail service credential 
		service : 'Gmail',
		auth : {
			user : 'dummyctg1990@gmail.com',
			pass : 'nodecontact'
		}
	});

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: 'Tester <tester9004@gmail.com>', // sender address
	    to: 'dummyctg1990@gmail.com', // list of receivers
	    subject: 'Website Submission', // Subject line
	    text: 'You have a new submission with the following details....Name: ' + req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
	    html: '<p>You got a new submission with the following details....</p><ul><li>Name: '+req.body.name+ '</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);

	});
});
module.exports = router;
