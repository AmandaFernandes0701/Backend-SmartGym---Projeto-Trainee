const ExerciseModel = require("../models/exercise");

module.exports = {
    async create(request, response){

        try {
            const newExercise = request.body;
            const result = await ExerciseModel.create(newExercise);
            return response.status(200).json({id_exercicio: result});

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
            const {id_exercicio} = request.params;
            const result = await ExerciseModel.updateById(id_exercicio, newExercise);
            return response.status(200).json({id_exercicio: result});

        } catch (error) {
            console.warn("Exercise update failed: ", error);
            return response.status(500).json({notification: "Internal server erros while trying to update Exercise"});
        }
    },

    async delete(request, response){
        try {
            const newExercise = request.body;
            const result = await ExerciseModel.create(newExercise);
            return response.status(200).json({id_exercicio: result});
        } catch (error) {
            console.warn("Exercise delete failed: ", error);
            return response.status(500).json({notification: "Internal server erros while trying to delete Exercise"});
        }
    },
};