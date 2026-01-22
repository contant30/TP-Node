const {body} = require('express-validator');

const registerValidationRules = () => {
    return [
        body('username')
            .notEmpty().withMessage('Le nom d\'utilisateur est requis')
            .isLength({min: 3}).withMessage('Le nom d\'utilisateur doit contenir au moins 3 caractères'),
        body('email')
            .notEmpty().withMessage('L\'email est requis')
            .isEmail().withMessage('L\'email doit etre valide'),
        body('password')
            .notEmpty().withMessage('Le mot de passe est requis')
            .isLength({min: 6}).withMessage('Le mot de passe doit contenir au moins 6 caractères'),
    ];
};

const loginValidationRules = () => {
    return [    
        body('email')
            .notEmpty().withMessage('L\'email est requis')
            .isEmail().withMessage('L\'email doit etre valide'),
        body('password')
            .notEmpty().withMessage('Le mot de passe est requis')
    ];
};

module.exports = {registerValidationRules, loginValidationRules};