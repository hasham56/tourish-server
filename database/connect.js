require("dotenv").config();
const mongoose = require("mongoose");

console.log("db address:", `${process.env.DB_HOST}_${process.env.NODE_ENV}`);

// mongoose.connect("mongodb://localhost:27017/myDb", { useNewUrlParser: true });
mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.fj4ztzd.mongodb.net/tourish?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
mongoose.Promise = global.Promise;
mongoose.connection.on("error", console.log);

module.exports = mongoose;
