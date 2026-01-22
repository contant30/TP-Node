const { Course, Category, User } = require('../models/associations');

const getAllCourses = async () => {
    return await Course.findAll({
        where: { published: true },
        include: [
            { model: Category, attributes: ['id', 'name'] },
            { model: User, attributes: ['id', 'username'] }
        ]
    });
}

const getCourseById = async (id) => {
    return await Course.findByPk(id, {
        include: [
            { model: Category, attributes: ['id', 'name'] },
            { model: User, attributes: ['id', 'username'] }
        ]
    });
}

const getCoursesByLevel = async (level) => {
    return await Course.findAll({
        where: { level, published: true },
        include: [
            { model: Category, attributes: ['id', 'name'] },
            { model: User, attributes: ['id', 'username'] }
        ]
    });
}

const createCourse = async (courseData) => {
    return await Course.create(courseData);
}

const updateCourse = async (id, courseData) => {
    const course = await Course.findByPk(id);
    if (!course) {
        throw new Error('Cours non trouvé');
    }
    return await course.update(courseData);
}

const deleteCourse = async (id) => {
    const course = await Course.findByPk(id);
    if (!course) {
        throw new Error('Cours non trouvé');
    }
    return await course.destroy();
}

module.exports = {
    getAllCourses,
    getCourseById,
    getCoursesByLevel,
    createCourse,
    updateCourse,
    deleteCourse
}