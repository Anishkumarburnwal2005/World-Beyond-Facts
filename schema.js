const Joi = require('joi');

module.exports.factSchema = Joi.object({
    factValidation: Joi.object({
        fact: Joi.string().required(),
        category: Joi.string().required(),
        source: Joi.string().required(),
        data_discovered: Joi.string().required(),
        is_verified: Joi.boolean().required(),
        added_by: Joi.string().required().allow("", null),
        created_at: Joi.date().optional().allow("", null),
        updated_at: Joi.date().optional().allow("", null),
        related_img: Joi.string().allow("", null),
    }).required(),
});


module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().min(1).max(5).required(),
        comment: Joi.string().required(),
    }).required(),
});