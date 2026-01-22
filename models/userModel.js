const { DataTypes}= require('sequelize');
const { sequelize} = require('../db/db')

const User = sequelize.define('User',{
    //- id : Integer (auto-incrémenté)
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIcrement: true
    },
    //- username : String (unique, non nul)
    username:{
        type: DataTypes.STRING,
        allowNulle: false,
        unique: true
    },
    //- email : String (unique, non nul)
    email: {
        type: DataTypes.STRING,
        allowNulle: false,
        unique: true
    },
    //- password : String (non nul)
    password: {
        type: DataTypes.STRING,
        allowNulle: false
    }
},{
    tableName: 'user',
    timestamps: true

});

module.exports = User;