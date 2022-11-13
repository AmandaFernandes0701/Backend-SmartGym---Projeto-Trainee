// Relation = Notecategory --> Vídeo do treinamento

const connection = require ("../database/connection");
const exercise = require("./exercise");

module.exports = {
    async create(relation){
        const result = await connection("relation").insert(relation);
        return result;
    },

    async getById({id_exercicio, user_id}){
        const result = await connection("relation").where({id_exercicio, user_id}).select("*").first();
        return result;
    },

    async getByUserId({user_id}){
        const result = await connection("relation").join("exercise","exercise.id_exercicio", "=", "relation.id_exercicio").where({"relation.user_id":user_id}).select("exercise.*");
        return result; 
    },

    async deleteByUserIdByExercise({user_id,id_exercicio}){
        const result = await connection("relation").where({user_id,id_exercicio}).delete();
        return result;
    }
}