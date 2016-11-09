const fs = require('fs');
const path = require('path');

exports.router = require('express').Router();

let files = fs.readdirSync(__dirname);

files.forEach(function (file) {

  if (!file.endsWith('.js')) return;
  if (file.endsWith('index.js')) return;

  let controller = require('./' + file);

  if (!controller.router) return;

  exports.router.use(controller.mountPath || '', controller.router);
});