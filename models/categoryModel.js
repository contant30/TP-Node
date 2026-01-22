const { DataTypes} = require('sequelize');
const { sequelize} = require('../db/db')

const Category = sequelize.define('Category',{
    
    //- id : Integer (auto-incrémenté)
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    //- name : String (unique, non nul)
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    //- description : Text
    description: {
        type: DataTypes.TEXT,
    }
},{
    tableName: 'category',
    timestamps: true
    //underscored: true
});

module.exports = Category;