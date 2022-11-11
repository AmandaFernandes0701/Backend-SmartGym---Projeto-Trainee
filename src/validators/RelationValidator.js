const {celebrate, Segment, Joi} = require('celebrate');
const { update } = require('../controllers/RelationController');

module.exports = {
    create: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            relation: Joi.string().required(),
        })
    }),

    getByUserId: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        })
    }),

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
            id_exercicio: Joi.string().required(),
        })
    }),

};