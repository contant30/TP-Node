const {body, param} = require('express-validator'); 

const categoryValidator = [

    body('name')
        .notEmpty().withMessage('Le nom de la catégorie est obligatoire')
        .isLength({min: 3}).withMessage('Le nom de la catégorie doit contenir au moins 3 caractères'),

    body('description')
        .optional(),
]

const idCategoryValidator = [
    param('id')
        .notEmpty().withMessage('L\'id est obligatoire')
        .isInt().withMessage('L\'id doit etre un nombre entier')
        .toInt()
]

module.exports = {categoryValidator, idCategoryValidator};
