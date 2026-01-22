const { DataTypes} = require('sequelize');
const { sequelize} = require('../db/db')

const Category = sequelize.define('Category',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
    }
},{
    tableName: 'category',
    timestamps: true
    //underscored: true
});

module.exports = Category;