const { DataTypes } = require('sequelize');
const { sequelize}  = require('../db/db');

const Course = sequelize.define('Course', {

    //- id : Integer (auto-incrémenté) 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    //- title : String (requis)
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //- description : Text (requis)
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    //- duration : Integer (en minutes, requis)
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //- level : String (débutant, intermédiaire, avancé)
    level: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //- price : Float (requis)
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    //- published : Boolean (default false)
    published: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    //- instructor : String (requis)
    instructor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //- categoryId : Integer (clé étrangère vers Category)
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'course',
    timestamps: true
    //underscored: true
});

module.exports = Course;