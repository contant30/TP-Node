const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false
});

const connectDB= async() =>{
    try {
        await sequelize.authenticate();
        console.log('connection réussi');

        require('../models/associations');

        await sequelize.sync({alter: true});
        console.log('Models synchronisé');
    } catch (error){
        console.log('connection non réussi:', error);
    }
    };

    module.exports = {sequelize, connectDB};