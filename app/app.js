'use strict';
const express = require('express');
const app = express();
const log = require('./log');
const bodyParser = require('body-parser');
const cors = require('./cors');
const status = require('./status');

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors);
app.use('/status', status);


app.use(function(err, req, res, done) {
  if(err)
    log.error('Error: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', err);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
  done();
});

app.listen(port, () => log.info('App started on port:', port));
