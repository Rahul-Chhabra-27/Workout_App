const mongoose = require('mongoose');
const workoutModal = require("../models/WorkoutModals");

// Update workout.......
const updateWorkout = async(req,res) => {
    const { id } = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) throw new Error('No workout found!');
        const workout = await workoutModal.findOneAndUpdate({_id:id},{...req.body});
        if(!workout) throw new Error('No workout found to update!');
        else  res.status(200).json(workout);
    }
    catch(err) {
        res.status(400).json({err:err.message});
    }
}

// Delete workout...
const deleteWorkout = async(req,res) => {
    const { id } = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) throw new Error('No workout found!');
        const workout = await workoutModal.findOneAndDelete({_id:id});
        if(!workout) {
            throw new Error('No workout found!');
        }
        else {
            res.status(200).json(workout);
        }
    }
    catch(err) {
        res.status(400).json({mssg:err.message});
    }
}
// Get the requested workout...
const getWorkout = async (req,res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
             throw new Error("Workout not found!");
        }
        const workout = await workoutModal.findById(id);
        if(!workout) {
            throw new Error('Workout is not found!!');
        }
        else 
            res.status(200).json(workout);
    }
    catch(err) {
        res.status(400).json({err:err.message});
    }
}
// Get all the workouts...
const getWorkouts = async(req,res) => {
    try {
        const workouts = await workoutModal.find({}).sort({createdAt:-1});
        res.status(200).json(workouts);
    }
    catch(error) {
        res.status(400).json({err : error.message});
    }
}
// Create a new workout..........
const createWorkout = async(req,res) => {
    const { title, load, reps } = req.body;
    try {
      const workout = await workoutModal.create({ title, load, reps });
      res.status(200).json(workout);
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
}
module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}