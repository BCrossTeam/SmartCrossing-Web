import express from 'express';
import path from 'path';

const port = (process.env.PORT || 3000)
const app = express();

if(process.env.NODE_ENV == 'production') {
  console.log('Production mode');
} else {
  console.log('Developer mode');
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackConfig = require('../webpack.config.dev');
  app.use(webpackMiddleware(webpack(webpackConfig)));
}

app.use('/', express.static(path.join(__dirname+'/public')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => console.log('Listening at 3000'));
