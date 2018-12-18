const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');
const Routine = require('../models/Routine');

const User = require('../models/User');

router.get('/routines', (req, res, next) => {
	Routine.find({user: req.user._id})
		.then((allRoutines) => {
			res.json(allRoutines);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.get('/routines/details/:id', (req, res, next) => {
	Routine.findById(req.params.id)
		.then((theRoutine) => {
			console.log('HOHOHOHOHHOHOHOHOHOHOHOHHOHOOH')
			res.json(theRoutine);

		})
		.catch((err) => {
			res.json(err);
		});
});

router.post('/routines/add-new', (req, res, next) => {
	console.log('dd this get called??? ', req.body);
	Routine.create({
		user: req.user.id,
		dateCreated: req.body.date,
		exercises: req.body.exercises
	})
		.then((response) => {
			console.log('resonse', response);
			res.json(response);
		})
		.catch((err) => {
			res.json(err);
		});
});


router.post('/routines/details/:id', (req, res, next) => {
	console.log(req.params, req.body, req.user, "lsjdl;akjf;lakjdfajdf;")
	Routine.findOne({user:req.user._id}, function (err, routine) {
		console.log(routine)
		routine.mondayRoutine.push('yooooo')
		routine.save(function (err) {
			if(err) {
					console.error('ERROR!');
			}
		});
	})
		
	//Routine.findByIdAndUpdate(req.params.id, {
	/*	
		$push: {sundayRoutine: 'sdabsdhb'}
	})
		.then((response) => {
			console.log("=-=-=--=-=-=-=-=-=", response)
			res.json([ { message: 'this task has been successfully updated' }, response ]);
		})
		.catch((err) => {
			console.log("EEEEERRRRORRRR", err)
			res.json(err);
		});*/
})



router.post('/routines/edit/:id', (req, res, next) => {
	console.log("ROUTE HAPPENING")
	Routine.findByIdAndUpdate(req.params.id, {
		$push: {sundayRoutine: 'sdabsdhb'}
	})
		.then((response) => {
			console.log("=-=-=--=-=-=-=-=-=", response)
			res.json([ { message: 'this task has been successfully updated' }, response ]);
		})
		.catch((err) => {
			console.log("EEEEERRRRORRRR", err)
			res.json(err);
		});
});

router.post('/routines/delete/:id', (req, res, next) => {
	Routine.findByIdAndRemove(req.params.id)
		.then((deletedRoutine) => {
			if (deletedRoutine === null) {
				res.json({ message: 'sorry routine could not be found' });
				return;
			}

			res.json([ { message: 'Routine deleted' }, deletedRoutine ]);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
