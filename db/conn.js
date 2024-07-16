const mongoose = require("mongoose");

//connection function
const conn = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.once("open", () => {
      console.log("connected to mongodb");
    });
  } catch (error) {
    console.error(
      `Something went wrong with connect to the database ${error.message}`
    );
  }
};

module.exports = conn;
