const courseService = require('../service/courseService');

const courseController = {

    getAllCourses: async (req, res) => {
        try {
            const courses = await courseService.getAllCourses();
            res.status(200).json(courses);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getCourseById: async (req, res) => {
        try {
            const course = await courseService.getCourseById(req.params.id);
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getCoursesByLevel: async (req, res) => {
        try {
            const courses = await courseService.getCoursesByLevel(req.params.level);
            res.status(200).json(courses);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createCourse: async (req, res) => {
        try {
            const course = await courseService.createCourse(req.body);
            res.status(201).json(course);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateCourse: async (req, res) => {
        try {
            const course = await courseService.updateCourse(req.params.id, req.body);
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
    deleteCourse: async (req, res) => {
        try {
            const course = await courseService.deleteCourse(req.params.id);
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = courseController;