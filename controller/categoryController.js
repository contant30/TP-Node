const categoryService = require('../service/categoryService');

const categoryController = {
        
    getAllCategories: async (req, res) => {
        try {
            const categories = await categoryService.getAllCategories();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getCategoryById: async (req, res) => {
        try {
            const category = await categoryService.getCategoryById(req.params.id);
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },  
    createCategory: async (req, res) => {
        try {
            const category = await categoryService.createCategory(req.body);
            res.status(201).json(category);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateCategory: async (req, res) => {
        try {
            const category = await categoryService.updateCategory(req.params.id, req.body);
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const category = await categoryService.deleteCategory(req.params.id);
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }       
}

module.exports = categoryController;
