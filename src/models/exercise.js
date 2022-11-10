// Exercise = Category --> Vídeo do treinamento

const {v4: uuidv4} = require('uuid');
const connection = require ("../database/connection");

module.exports = {
    async create(exercise){
        const id_exercicio = uuidv4();
        exercise.id_exercicio = id_exercicio;

        const result = await connection("exercise").insert(exercise);
        return result;
    },

    async getById({id_exercicio}){
        const result = await connection("exercise").where({id_exercicio}).select("*");
        return result;
    },

    async updateById(id_exercicio, exercise){
        const result = await connection("exercise").where(id_exercicio).update(exercise);
        return result;
    },

    async deleteById(id_exercicio){
        const result = await connection("exercise").where({id_exercicio}).delete();
        return result;
    }
}