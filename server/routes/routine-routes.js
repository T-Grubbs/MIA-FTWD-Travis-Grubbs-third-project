const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');
const Routine = require('../models/Routine');
const User = require('../models/User');


router.get('/routines', (req, res, next) => {
	console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=',req.user)
	Routine.find({user: req.user._id}).populate('exercises')
		.then((allRoutines) => {
			console.log(allRoutines)
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
	console.log(req.params, req.body, req.user, "in this")
	Routine.findOne({user:req.user._id}, function (err, routine) {
		console.log(routine)
		//We got all the info we need to update this routine.  Now we got to loop through the routine days, 
		//and add exercises to days or take them out.
		let days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
		//for(var day in days){
		for(let d=0; d<days.length; d++){
			let day = days[d]
			//day = monday 
			if(routine[day] && req.body.state[day]){ //monday is true
				console.log(routine[day])
				routine[day].push({
					exerciseId:req.params.id, 
					title:req.body.state.titleInput,
					image: req.body.state.imageInput
				})
			}
		}
		//routine.mondayRoutine.push('yooooo')
		routine.save(function (err) {
			if(err) {
					console.error('ERROR!');
			}
			res.json({succesfullySaved:true})
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



router.post('/routines/edit/:id/:eId', (req, res, next) => {
	console.log("ROUTE HAPPENING")
	Routine.findByIdAndUpdate(req.params.id, {
		$push: {sundayRoutine: req.params.eId}
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

router.post('/routines/delete/', (req, res, next) => {
	console.log(req.body, req.params, req.user, 'adsfadsfasdfasdfdf')
	Routine.findOne({user:req.user._id})
		.then((editedRoutine) => {

			console.log(editedRoutine)
			editedRoutine[req.body.day] = []
			editedRoutine.save()
			res.json([ { message: 'Routine editedRoutine' }, editedRoutine ]);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
