const express = require('express'); // Expressモジュールのインポート
const app = express(); // Expressのインスタンスを作成
const https = require('https'); // HTTPSモジュールのインポート
const fs = require('fs'); // ファイルシステムモジュールのインポート
const path = require('path'); // パスモジュールのインポート

// SSL証明書の読み込み
const options = {
  key: fs.readFileSync('ssl/key.pem'),
  cert: fs.readFileSync('ssl/cert.pem')
};

// HTTPSサーバーの作成
https.createServer(options, app).listen(3001, () =>
  console.log('HTTPS listening on 3001...')
);

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, "public"))); 