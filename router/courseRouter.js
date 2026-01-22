const express = require('express');
const router = express.Router();
const courseController = require('../controller/courseController');
const { courseValidator, idCourseValidator } = require('../validator/courseValidator');
const validate = require('../validator/validate');
const authMiddleware = require('../middleware/authMidddleware');


// route pour les cours

// Récupérer tous les cours publiés en public
router.get('/',courseController.getAllCourses);

// Récupérer un cours par son ID en public
router.get('/:id', idCourseValidator, validate, courseController.getCourseById);

// Récupérer les cours par niveau en public
router.get('/level/:level', courseValidator, validate, courseController.getCoursesByLevel);

// Creer un cours en private
router.post('/', authMiddleware,courseValidator, validate, courseController.createCourse);

// Modifier un cours en private
router.put('/id',idCourseValidator, authMiddleware, courseValidator, validate, courseController.updateCourse );

// Supprimer un cours en private
router.delete('/id', idCourseValidator, authMiddleware, validate, courseController.deleteCourse);

module.exports = router;
