// npmライブラリインポート
const mongoose = require("mongoose");

// ライブラリ外インポート

const userSchema = new mongoose.Schema(
  {
    username: {
      // ユーザ名
      type: String,
    },
    email: {
      // Email
      type: String,
    },
    password: {
      //パスワード
      type: String,
    },
    profilePicture: {
      // アイコン画像
      type: String,
    },
    coverPicture: {
      // プロフィール背景
      type: String,
    },
    followers: {
      // フォロー機能 ユーザIdを格納していく SNS要素も持たせるか？
      type: Array,
      default: [],
    },
    followings: {
      // フォロワー機能 ユーザIdを格納していく　SNS要素も持たせるか？
      type: Array,
      default: [],
    },
    isAdmin: {
      // システム管理者 || 一般ユーザ
      type: Boolean,
      default: false,
    },
    isLogin: {
      // ログイン状態を管理
      type: Boolean,
      default: false,
    },
    isActive: {
      // 有効/無効状態を管理
      type: Boolean,
      default: false,
    },
    desc: {
      // ユーザ説明
      type: String,
      max: 70,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
