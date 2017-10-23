var express = require('express');
var router = express.Router();
var User = require("../models/user"); 

router.get('/', function (req, res, next) {
	User.findOne({}, function(err, doc){
		if(err){
			return res.send("No such user exists"); 
		} else{
			return res.render("message", {email: doc.email})
		}
	})
});

router.get("/message", function(req, res, next){
	res.send("Email has been saved"); 
})


router.post("/", function(req, res, next){
	const email = req.body.email;
	const user = new User({
		firstName: "Rahul", 
		lastName: "Kumar", 
		password: "secret", 
		email: email
	}); 

	user.save(); 
	console.log(user); 
	res.redirect("/message"); 
}); 

module.exports = router;
