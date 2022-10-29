const mongoose = require('mongoose');







const DBConnect = async () => {

    const connect = await mongoose.connect(process.env.DATABASE_LOCAL)
        .then(() => {
            console.log("Database connection successfully!!".yellow.bold);
        })
        .catch(() => {
            console.log("Database connection Error!!".red.bold);
        })

    return connect;
}


module.exports = DBConnect;





























