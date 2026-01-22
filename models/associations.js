const Course = require ('./courseModel');
const Category = require('./categoryModel');
const User = require('./userModel')

// Relation 1:N Une categorie peut avoir plusieurs cours.
Category.hasMany(Course,{
    foreignKey: 'courseId',
    as: 'course'
});

// Un cours appartient à une seule categorie.
Course.belongsTo(Category,{
    foreignKey: 'categoryId',
    as: 'category'
});

module.exports = {Category, Course, User};