const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.createConnection(process.env.DBCONN);
    console.log(`MongoDB Connected Successfully`);
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB