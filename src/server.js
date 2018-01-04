import express from 'express';
import React from 'react';

import Reducers from './reducers';

const app = express();
const PORT = process.env.PORT || 3000;

function renderPage(appHtml) {
  return `
    <!doctype html>
    <html>
      <head></head>
      <body>
        ${appHtml}
      </body>
    </html>
  `
};

app.get('/', (req, res) => {
  res.status(200).send(renderPage(appHtml));
});