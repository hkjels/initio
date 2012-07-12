"use strict";

/**
 * Module dependencies.
 */

var stylus   = require('stylus'),
    nib      = require('nib'),
    read     = require('fs').readdirSync,
    basename = require('path').basename,
    ext      = require('path').extname;

/**
 * Library version.
 */

exports.version = '0.0.01';

/**
 * Stylus path.
 */

exports.path = __dirname;

/**
 * Imagelist
 *
 * Return an array of image-files from the specified
 * directory.
 *
 * @param {string} dir
 * @return {array}
 */

function imagelist (dir) {
  dir = dir.val || __dirname+'/../res/icons';
  var images    = read(dir),
      supported = ['.png', '.gif', '.jpg', '.jpeg'].join();

  return images.filter(function (image) {
    return supported.indexOf(ext(image)) !== -1;
  }).map(function (image) { return dir+'/'+image; })
}

/**
 * Plugin
 *
 * Expose plugin-callback to stylus for use with `stylus.use`
 *
 * @param {String} pub    Path to static resources
 * @return {Function}
 */

var plugin = module.exports = function plugin(pub) {
  return function (style) {
    style.include(__dirname);

    // List images of a directory as an array

    style.define('imagelist', imagelist);

    // Base64-encode images that are smaller than 3000 bytes

    style.define('url', stylus.url({paths: [pub], limit: 3000}));

    // Makes it easy to separate out filenames

    style.define('basename', function (path, ext) {
      return basename(path.val, ext.val || null);
    });

    // Use nib

    style.use(nib())['import']('nib');
  }
}

