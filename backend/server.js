// npmライブラリ
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();

// ライブラリ外インポート
// MongoDB接続関数
const connectDB = require("./config/db");

/**
 * 設定系
 */
// ポート番号を環境変数から指定
const port = process.env.PORT || 5000;
// エクスプレスを使用できる処理
const app = express();
// MongoDB接続処理
connectDB();

/**
 * ミドルウェア
 */
// JSONをExpressで使用することを宣言
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * ルーティング
 */
// ユーザ関係ルーティング
app.use("/api/v1/users", require("./routes/userRouters"));
// 投稿関係ルーティング
app.use("/api/v1/posts", require("./routes/postInfoRouters"));
// コメント関係ルーティング
app.use("/api/v1/comments", require("./routes/commentRouters"));

/**
 * サーバ起動
 * @description npm run serverでサーバを起動
 */
app.listen(port, console.log(`ポート${port}番でサーバ起動`));
