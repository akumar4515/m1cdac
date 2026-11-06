const mongoose = require('mongoose');

module.exports.connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log("db connected");

    } catch (err) {
        console.error(err);
        throw err;
    }
};