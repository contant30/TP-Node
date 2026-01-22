const { User } = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (userData) => {

    const { username, email, password} = userData;
    const hashedPassword = await bcrypt.hash(password, 6);
    return await User.create({ username, email, password: hashedPassword });
}

const login = async (email, password) => {

    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error('Utilisateur non trouvé');
    }

    const IsPasswordValid = await bcrypt.compare(password, user.password);
    if (!IsPasswordValid) {
        throw new Error('Mot de passe invalide');
    }

    const token = jwt.sign(
        { id: user.id, username: user.username},
        process.env.SECRET_KEY, 
        { expiresIn: '24h' }
    );

    return { user, token };
}

module.exports = { register, login };