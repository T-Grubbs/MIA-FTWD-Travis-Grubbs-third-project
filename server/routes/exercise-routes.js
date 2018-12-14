const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');

/* GET home page */
router.get('/exercises', (req, res, next) => {

	Exercise.find()
		.then((allExercises) => {
			res.json(allExercises);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.get('/exercise/details/:id', (req, res, next) => {
	Exercise.findById(req.params.id)
		.then((theExercise) => {
			res.json(theExercise);
		})
		.catch((err) => {
			res.json(err);
		});
});

// router.post('/exercises/add-new', (req, res, next)=>{
//     Exercise.create({
//         title: req.body.theTitle,

//     })
//     .then((response)=>{
//         res.json(response);
//     })
//     .catch((err)=>{
//         res.json(err);
//     })
// })

//     router.post('/exercises/edit/:id', (req, res, next)=>{
//         Exercise.findByIdAndUpdate(req.params.id, {
//             title: req.body.theTitle,
//             description: req.body.theDescription
//         })
//         .then((response)=>{
//             if(response === null){
//                 res.json({message: 'sorry we could not find this task'})
//                 return;
//             }

//             res.json([{message: 'this task has been successfully updated'},
//             response ])

//         })
//         .catch((err)=>{
//             res.json(err)
//         })
//     })

//     router.post('/exercises/delete/:id', (req, res, next)=>{
//         Exercise.findByIdAndRemove(req.params.id)
//         .then((deletedExercise)=>{
//             if(deletedExercise === null){
//                 res.json({message: 'sorry this exercise could not be found'})
//                 return;
//             }

//             res.json([
//                 {message: 'exercise succesfully deleted'},
//                 deletedExercise
//             ])
//         })
//         .catch((err)=>{
//             res.json(err)
//         })
//     })

module.exports = router;
