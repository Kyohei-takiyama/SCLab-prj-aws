// npmライブラリ
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();

// JsForce系
const cors = require("cors");
const jsforce = require("jsforce");

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

/**
 * Salesforce接続処理
 */
// CORS許可
app.use(
  cors({
    origin: "http://localhost:3000", //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);

// Salesforceとのコネクションを設定
const conn = new jsforce.Connection({
  // you can change loginUrl to connect to sandbox or prerelease env.
  loginUrl: "https://svc-labo-dev-ed.my.salesforce.com/",
});

// const username = "ktakiyama@terrasky.co.jp--svc";
// const password = "Kyohei0202";

// login
app.post("/api", (req, res) => {
  console.log("req.body", req.body);
  const { username, password } = req.body;
  conn.login(username, password, function (err, userInfo) {
    if (err) {
      return console.error(err);
    }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
    console.log("アクセストークン : ", conn.accessToken);
    console.log("インスタンスURL", conn.instanceUrl);
    // logged in user property
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    // ...
    return res.json({ userInfo });
  });
});

/**
 * サーバ起動
 * @description npm run serverでサーバを起動
 */
app.listen(port, console.log(`ポート${port}番でサーバ起動`));
