const ExerciseModel = require("../models/exercise");

const exercise = [
    {
        id: 0,
        name: "Cerrote",
    },
    {
        id: 1,
        name: "Extensão Tríceps",
    },
    {
        id: 2,
        name: "Flexão",
    },
    {
        id: 3,
        name: "Agachamento Livre",
    },
    {
        id: 4,
        name: "Leg Press",
    },
    {
        id: 5,
        name: "Cadeira Extensora",
    },
    {
        id: 6,
        name: "Quadríceps e Coluna",
    },
    {
        id: 7,
        name: "Posterior de Ombro",
    },
    {
        id: 8,
        name: "Downward Dog",
    },
]

module.exports = {


    async teste() {
        console.log("teste");
    },

    async getAll(request, response) {
        try {
            const result = await ExerciseModel.getAll();

            return response.status(200).json(result);
        } catch (error) {
            console.warn("Exercise get failed: ", error);

            return response.status(500).json({
                notification: "Internal server erros while trying to get Exercise",
            });
        }
    },

    async create(request, response) {
        try {
            console.log("chegou");
            const newExercise = request.body;
            const result = await ExerciseModel.create(newExercise);
            return response.status(200).json({ id_exercicio: result });

        } catch (error) {
            console.log("chegou");
            console.warn("Exercise create failed: ", error);
            return response.status(400).json({ notification: "Internal server erros while trying to create Exercise" });
        }
    },

    async getById(request, response) {
        try {
            const { id_exercicio } = request.params;
            const result = await connection("exercise").where({ id_exercicio }).select("*");
            // const result = await ExerciseModel.getByUserWithFilter(exercise_id, {});

            return response.status(200).json({ result });
        } catch (error) {
            console.warn("Exercise get failed: ", error);

            return response.status(500).json({
                notification: "Internal server erros while trying to get Exercises",
            });
        }
    },

    async update(request, response) {
        try {
            const { id_exercicio } = request.params;
            const newExercise = request.body;

            await ExerciseModel.updateById(id_exercicio, newExercise);

            return response.status(200).json({ notification: "Exercise updated sucessfully" });

        } catch (error) {
            console.warn("Exercise update failed: ", error);

            return response.status(500).json({ notification: "Internal server erros while trying to update Exercise" });
        }
    },

    async delete(request, response) {
        try {
            const newExercise = request.body;
            const result = await ExerciseModel.create(newExercise);
            return response.status(200).json({id_exercicio: result});
        } catch (error) {
            console.warn("Exercise delete failed: ", error);

            return response.status(500).json({ notification: "Internal server erros while trying to delete Exercise" });
        }
    },
};