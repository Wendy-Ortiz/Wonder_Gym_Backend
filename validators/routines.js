const Joi = require('joi');

exports.listRoutinesSchema = Joi.object({
    id: Joi.number().integer().required(),
});