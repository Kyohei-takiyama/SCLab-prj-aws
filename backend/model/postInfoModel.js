// npmライブラリインポート
const mongoose = require("mongoose");

// ライブラリ外インポート

const postInfoSchema = new mongoose.Schema(
  {
    title: {
      // 投稿タイトル
      type: String,
    },
    description: {
      // 説明
      type: String,
      max: 500,
    },
    img: {
      // 画像
      type: String,
    },
    likes: {
      // いいね投稿用、ユーザIdを格納していく
      type: Array,
      default: [],
    },
    userId: {
      // ユーザと紐づけ処理
      type: String,
    },
    comments: [
      // コメント紐づけ
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PostInfo", postInfoSchema);
