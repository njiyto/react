import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import Server from '../client/Server';

const app = express();

app.get('/plain', (req, res) => {
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
  res.render('index');
});

app.get('/server', (req, res) => {
  const jsx = (<Server />);
  const reactDom = renderToString(jsx);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDom));
});

app.use(express.static(path.join(__dirname, '../public')));
app.listen(4000, () => console.log('Example app listening on port 4000!'));

function htmlTemplate(reactDom) {
  return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>React SSR</title>
      </head>
      
      <body>
          <div id="app"></div>
          <div id="server">${reactDom}</div>
          <script src="./app.bundle.js"></script>
      </body>
      </html>
  `;
}
