const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');
const { categoryValidator,idCategoryValidator } = require('../validator/categoryValidator');
const validate = require('../validator/validate');
const authMiddleware = require('../middleware/authMidddleware');

// route pour les categories

// Récupérer tous les categories en public
router.get('/', categoryController.getAllCategories);

// Récupérer un category par son ID en public
router.get('/:id', idCategoryValidator, validate, categoryController.getCategoryById);

// Creer un category en private
router.post('/', authMiddleware, categoryValidator, validate, categoryController.createCategory);

// Modifier un category en private
router.put('/:id', idCategoryValidator, authMiddleware, categoryValidator, validate, categoryController.updateCategory);

// Supprimer un category en private
router.delete('/:id', idCategoryValidator, authMiddleware, validate, categoryController.deleteCategory);

module.exports = router;