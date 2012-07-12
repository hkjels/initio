
initio
======

__A proper beginning for your stylusneeds.__


## Install

    λ npm install initio


## Usage

    var app     = require('connect')(),
        stylus  = require('stylus'),
        initio  = require('initio');

    function compile(str, path) {
      return stylus(str).set('filename', path)
              .use(initio()).import('initio');
    }

    app
      .use(stylus.middleware({src: __dirname, compile: compile})
      .listen(8080);

Alternately, you can import the separate stylesheets
or initio from within your stylus-files.

    @import 'initio'
    @import 'initio/animation'
    @import 'initio/grid'

Initio uses [nib](http://visionmedia.github.com/nib/) for cross-browser support
and resets, so all of the features of nib are readily available to you.

