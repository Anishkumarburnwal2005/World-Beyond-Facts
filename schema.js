const Joi = require('joi');

module.exports.factSchema = Joi.object({
    factValidation: Joi.object({
        fact: Joi.string().required(),
        category: Joi.string().required(),
        source: Joi.string().required(),
        data_discovered: Joi.string().required(),
        is_verified: Joi.boolean().required(),
        added_by: Joi.string().required(),
        created_at: Joi.date().optional(),
        updated_at: Joi.date().optional(),
        related_img: Joi.string().allow("", null),
    }).required(),
});
