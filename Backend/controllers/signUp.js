const bcrypt = require('bcrypt');
const SignUp = require('../models/signUp');

const signUp = async (req, res) => {
    const { name, phone_no, password } = req.body.eventObj; // Access eventObj directly from req.body

    try {
        // Check if the user with the given phone number already exists
        const existingUser = await SignUp.findOne({ phone_no: phone_no }); // Corrected this line
        if (existingUser) {
            return res.status(400).json({ message: 'User with this phone number already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new SignUp({ name, phone_no, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const showEvent = async (req, res) => {
    try {
        const eventData = await SignUp.find({}).exec();
        res.status(200).send(eventData);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

module.exports = {
    signUp,
    showEvent
}
