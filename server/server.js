import express from 'express';
import path from 'path';

export default function server() {
  const app = express();
  app.use('/', express.static(path.join(__dirname+'/public')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
  });
  return app;
}
