const exercise = require("../models/exercise");
const ExerciseModel = require("../models/exercise");

module.exports = {
    async create(request, response){
        
        try {
            const newExercise = request.body;
            const result = await exercise.create(newExercise);
            return response.status(200).json(result);

        } catch (error) {
            
            console.warn("Exercise create failed: ", error);
            return response.status(500).json({notification: "Internal server erros while trying to create Exercise"});
        }
    },

    async getByUser(request, response){
        try {
            
        } catch (error) {
            
        }
    },

    async update(request, response){
        try {
            
        } catch (error) {
            
        }
    },

    async delete(request, response){
        try {
            
        } catch (error) {
            
        }
    },
};