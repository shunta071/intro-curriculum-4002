'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.param('id', (req, res, next, id) => {
  res.send(id);
});

router.get('/:id', (req, res, next) => {
  res.send(id);
});

module.exports = router;