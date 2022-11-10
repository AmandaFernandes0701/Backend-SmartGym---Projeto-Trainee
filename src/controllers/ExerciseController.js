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

    async getById(request, response){
        try {
            const {exercise_id} = request.params;
            const result = await ExerciseModel.getByUserWithFilter(exercise_id, {});

            return response.status(200).json({result});
        } catch (error) {
            console.warn("Exercise get failed: ", error);

            return response.status(500).json({
                notification: "Internal server erros while trying to get Exercises",
            });
        }
    },

    async update(request, response){
        try {
            const {id_exercicio} = request.params;
            const newExercise = request.body;

            await ExerciseModel.updateById(id_exercicio, newExercise);

            return response.status(200).json({ notification: "Exercise updated sucessfully"});

        } catch (error) {
            console.warn("Exercise update failed: ", error);

            return response.status(500).json({notification: "Internal server erros while trying to update Exercise"});
        }
    },

    async delete(request, response){
        try {
            const {exercise_id} = request.params;
            const result = await ExerciseModel.deleteById(exercise_id);

            if (result === 0){
                return response
                .status(400)
                .json({ notification: "exercise_id not found" });
            }
            
            return response
            .status(200)
            .json({ notification: "Exercise deleted sucessfully"});

        } catch (error) {
            console.warn("Exercise delete failed: ", error);

            return response.status(500).json({notification: "Internal server erros while trying to delete Exercise"});
        }
    },
};