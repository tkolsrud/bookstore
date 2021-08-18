/* Require mongoose */
const mongoose = require("mongoose");

/* Connect to mongodb */
const dbUrl = "mongodb://localhost:27017/books-db";

/* Connect Mongoose */
mongoose
    .connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(function () {
        console.log("MongoDB Connected!");
    })
    .catch(function (err) {
        console.log("MongoDB error");
        console.log(err);
    });

mongoose.connection.on("disconnected", function () {
    console.log("MongoDB disconnected");
});

module.exports = {

}