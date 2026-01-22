const { DataTypes}= require('sequelize');
const { sequelize} = require('../db/db')

const User = sequelize.define('User',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIcrement: true
    },
    username:{
        type: DataTypes.STRING,
        allowNulle: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNulle: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNulle: false
    }
},{
    tableName: 'user',
    timestamps: true

});

module.exports = User;