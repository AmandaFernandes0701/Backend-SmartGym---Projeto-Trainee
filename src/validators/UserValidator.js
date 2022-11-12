const {celebrate, Segment, Joi} = require('celebrate');
const { update } = require('../controllers/UserController');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            idade: Joi.number().required(),
            cpf: Joi.string().required(),
            sexo: Joi.string().required(),
            endereço: Joi.string().required(),
            cidadeestado: Joi.string().required(),
            telefone: Joi.string().required(),
            email: Joi.string().email().required(),
            senha: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            confirmacaosenha: Joi.ref('senha').required(),
        })
    }),

    getAll: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
        })
    }),

    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        })
    }),

    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),

        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().optional(),
            idade: Joi.number().optional(),
            cpf: Joi.string().optional(),
            sexo: Joi.string().optional(),
            endereço: Joi.string().optional(),
            cidadeestado: Joi.string().optional(),
            telefone: Joi.string().optional(),
            email: Joi.string().email().optional(),
            senha: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).optional(),
            confirmacaosenha: Joi.ref('senha').optional(),
        }).min(1),
    }),

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        })
    }),

};