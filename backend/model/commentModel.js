// npmライブラリインポート
const mongoose = require("mongoose");

// ライブラリ外インポート

const commentSchema = new mongoose.Schema({
  commentDetail: {
    // コメント内容
    type: String,
  },
  userId: {
    type: String,
  },
  auther: {
    // ユーザと紐づけ処理
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Comment", commentSchema);
