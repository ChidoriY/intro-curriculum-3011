'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(`<!DOCTYPE html>
  <html lang="ja">
  <head>
      <meta charset="UTF-8">
      <title>Document</title>
  </head>
  <body>
      <h1>HTMLの一番大きい見出しを表示します</h1>
  </body>
  </html>`); // ``での文字列指定は改行にも対応しているためそのまま貼り付けられる
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
