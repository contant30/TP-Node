const {body, param} = require('express-validator');

const courseValidator = [

    //- title : non vide, min 3 caractères
    body('title')
        .notEmpty().withMessage('Le titre ne peux être vide')
        .isLength({min: 3}).withMessage('Le titre doit contenir au moins 3 caractères'),

    //- description : non vide, min 10 caractères
    body('description')
        .notEmpty().withMessage('La description ne peux être vide')
        .isLength({min: 10}).withMessage('La description doit contenir au moins 10 caractères'),

    //- duration : nombre positif
    body('duration')
        .isInt({ min: 1 }).withMessage('La durée doit etre un nombre'),

    //- level : doit etre debutant, intermediaire ou avance
    body('level')    
        .isIn(['debutant', 'intermediaire', 'avance']).withMessage('Le niveau doit etre debutant, intermediaire ou avance'),

    //- price : nombre positif
    body('price')
        .isFloat({min: 0}).withMessage('Le prix doit etre un nombre positif'),

    //- instructor : non vide
    //body('instructor')
    //    .notEmpty().withMessage('L\'instructeur ne peux être vide'),

    // Vérification que la category existe
    body('categoryId')
        .notEmpty().withMessage('La catégorie est obligatoire')
        .isInt().withMessage('La catégorie doit etre un nombre')
        .custom(async (value) => {
            const category = await Category.count({where :{id:value}});
            if (category === 0) {
                throw new Error('La catégorie n\'existe pas');
            }
            return true;
        })
        .toInt()
]


const idCourseValidator = [
    param('id')
        .notEmpty().withMessage('L\'id est obligatoire')
        .isInt().withMessage('L\'id doit etre un nombre entier')
        .toInt()
]   

module.exports = {courseValidator, idCourseValidator};
    
        

