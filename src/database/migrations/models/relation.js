// Relation = Notecategory --> Vídeo do treinamento

const connection = require ("../database/connection");

module.exports = {
    async create(relation){
        exercise.id_exercicio = id_exercicio;

        const result = await connection("relation").insert(relation);
        return result;
    },

    async getById({id_exercicio, user_id}){
        const result = await connection("relation").where({id_exercicio, user_id}).select("*").first();
        return result;
    },
}