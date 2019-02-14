const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const passport = require('passport');
const Routine = require('../models/Routine');


//-----------------USER SIGN UP ROUTER-------------------------------------|

router.post('/signup', (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;
	const dateOfBirth = req.body.dateOfBirth;
	const height = req.body.height;
	const weight = req.body.weight;
	const bio = req.body.bio;

	User.findOne({ username }, (err, foundUser) => {
		if (err) {
			res.json({ message: 'Username check went bad.' });
			return;
		}

		if (foundUser) {
			res.json({ message: 'Username taken. Choose another one.' });
			return;
		}

		const salt = bcrypt.genSaltSync(10);
		const hashPass = bcrypt.hashSync(password, salt);

		const theNewUser = new User({
			username: username,
			password: hashPass,
			dateOfBirth: dateOfBirth,
			height: height,
			weight: weight,
			bio: bio
		});

		theNewUser.save((err, newuser) => {
			if (err) {
				res.json({ message: 'Saving user to database went wrong.' });
				return;
			}

			console.log('the new user', newuser)
			//create a new routine for this user.  
			Routine.create({
				user:newuser._id
			})

			req.login(theNewUser, (err) => {
				if (err) {
					res.json({ message: 'Login after signup went bad.' });
					return;
				}

				res.json(theNewUser);
			});
		});
	});
});

//-------------------USER LOGIN METHOD-------------------------------

router.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, theUser, failureDetails) => {
		if (err) {
			res.json({ message: 'SOMETHING WENT WRONG AUTHENTICATING THE USER' });
			return;
		}

		if (!theUser) {
			res.json(failureDetails);
			return;
		}

	
		req.login(theUser, (err) => {
			if (err) {
				res.json({ message: 'SESSION SAVE WENT BAD' });
				return;
			}

			res.json(theUser);
			console.log(theUser)
		});
	})(req, res, next);
});

//-------------USER LOGUT METHOD-------------------

router.post('/logout', (req, res, next) => {
	req.logout();
	res.json({ message: 'LOG OUT SUCCESS' });
});

router.get('/loggedin', (req, res, next) => {
	if (req.isAuthenticated()) {
		res.json(req.user);
		return;
	}
	res.status(500).json({ message: 'UNAUTHORIZED' });
});

module.exports = router;
