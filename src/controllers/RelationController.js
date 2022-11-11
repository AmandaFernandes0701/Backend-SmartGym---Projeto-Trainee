const RelationModel = require("../models/relation");

module.exports = {

    async create(request, response) {
        try {
            const newRelation = request.body;
            const result = await RelationModel.create(newRelation);
            return response.status(200).json({ result });

        } catch (error) {
            console.warn("Relation create failed: ", error);
            return response.status(400).json({ notification: "Internal server erros while trying to create Relation" });
        }
    },

    async getByUserId(request, response) {
        try {

            const { user_id } = request.params;
            const result = await RelationModel.getByUserId({ user_id });
            return response.status(200).json({ result });

        } catch (error) {
            console.warn("Relation get failed: ", error);

            return response.status(500).json({
                notification: "Internal server erros while trying to get Relation",
            });
        }
    },

    async delete(request, response) {
        try {
            const { user_id, id_exercicio } = request.params;
            const result = await RelationModel.deleteByUserIdByExercise({user_id, id_exercicio});

            if (result === 0) {
                return response
                    .status(400)
                    .json({ notification: "user_id or exercise_id not found" });
            }

            return response
                .status(200)
                .json({ notification: "Relation deleted sucessfully" });

        } catch (error) {
            console.warn("Relation delete failed: ", error);

            return response.status(500).json({ notification: "Internal server erros while trying to delete Relation" });
        }
    },
};