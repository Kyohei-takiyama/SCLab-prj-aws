// npmライブラリインポート
const mongoose = require("mongoose");

// ライブラリ外インポート

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo DB 接続 ${connect.connection.host}`.cyan.underline);
  } catch (error) {
    console.log("エラー発生".cyan.underline, error);
  }
};

module.exports = connectDB;
