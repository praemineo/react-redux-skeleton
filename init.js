'use strict';

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const responseTime = require('response-time');

module.exports.init = function init() {

  const app = express();
  require.cache.userObject = { app };
  require.cache.userObject.appPath = __dirname;

  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(cookieParser());
  app.use(helmet());
  app.use(cors());
  app.use(responseTime());

  // const config = require(path.join(__dirname, '/config/index.js'));
  // const appRouter = require(path.join(__dirname, '/routes.js'));
  // const logger = config.logger.createLogger('init');

  // Router mounting
  // app.use('/', appRouter);

  // Public Folder binding
  app.use(express.static(__dirname + "/dist"));

  app.use(function (req, res) {
    res.sendFile(path.resolve(__dirname,'./dist/index.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./public/index.html'));
  });

  app.listen(process.env.PORT || 5050)
    .on('error', error => {
      console.log(error)
    })
    .on('listening', () => {
      console.log(`listening on port ${process.env.PORT || 5050}`)
    });

};

