const express = require("express");
const app = express();
require("dotenv").config();

// post処理用
const bodyParser = require("body-parser");

// JSONオブジェクトの受信設定
app.use(express.json());

// 配列側のオブジェクトの受信設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ejs使用設定
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); //デバッグ用　これを置くことでlocalhostでviewsのejsが参照可能になる

// 静的ファイル読み込み
app.use(express.static(__dirname + "/public"));

// ルーティング
app.use("/home", require("./routes/home"));

// 3000ポートで受信
const port = parseInt(process.env.PORT) || 3000;

// APIサーバ起動
app.listen(port);
console.log(`Sample WebAPI listening on port ${port}`);
