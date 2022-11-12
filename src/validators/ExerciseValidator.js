const {celebrate, Segment, Joi} = require('celebrate');
const { update } = require('../controllers/ExerciseController');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            titulo: Joi.string().required(),
            descricao: Joi.number().required(),
            imagem: Joi.string().required(),
        })
    }),

    getAll: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
        })
    }),

    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id_exercicio: Joi.string().required(),
        })
    }),

    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id_exercicio: Joi.string().required(),
        }),

        [Segments.BODY]: Joi.object().keys({
            titulo: Joi.string().optional(),
            descricao: Joi.number().optional(),
            imagem: Joi.string().optional(),
        }).min(1),
    }),

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id_exercicio: Joi.string().required(),
        })
    }),

};