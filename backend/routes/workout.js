const express = require('express');
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/WorkoutControllers');
const routes = express.Router();


routes.get('/',getWorkouts);

routes.get('/:id',getWorkout);

routes.post('/',createWorkout)

routes.delete('/:id',deleteWorkout)

routes.patch("/:id",updateWorkout);

module.exports = routes;