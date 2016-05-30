JDHM-BO
========
[![Build Status](https://travis-ci.org/bourdeau/jdhm-bo.svg?branch=master)](https://travis-ci.org/bourdeau/jdhm-bo) [![Stories in Ready](https://badge.waffle.io/bourdeau/jdhm-bo.svg?label=ready&title=Ready)](http://waffle.io/bourdeau/jdhm-bo) [![Dependency Status](https://www.versioneye.com/user/projects/56b22743ad0be5003e0ae167/badge.svg)](https://www.versioneye.com/user/projects/56b22743ad0be5003e0ae167)
[![Dependency Status](https://david-dm.org/bourdeau/jdhm-bo.svg)](https://david-dm.org/bourdeau/jdhm-bo) [![Test Coverage](https://codeclimate.com/github/bourdeau/jdhm-bo/badges/coverage.svg?style=flat)](https://codeclimate.com/github/bourdeau/jdhm-bo/coverage) [![Issue Count](https://codeclimate.com/github/bourdeau/jdhm-bo/badges/issue_count.svg?style=flat)](https://codeclimate.com/github/bourdeau/jdhm-bo) [![Gitter](https://badges.gitter.im/bourdeau/jdhm-bo.svg?style=flat)](https://gitter.im/bourdeau/jdhm-bo?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[![Throughput Graph](https://graphs.waffle.io/bourdeau/jdhm-bo/throughput.svg)](https://waffle.io/bourdeau/jdhm-bo/metrics)


## Description :blue_book:

Jdhm-bo is a web app written with Angular2 and using a REST Api named [jdhm-api](https://github.com/bourdeau/jdhm-api) (PHP/Symfony3)


## Installing :sleeping:

```bash
# Clone and install modules
sudo apt-get install chromium-browser phantomjs
git clone git@github.com:bourdeau/jdhm-bo.git && cd jdhm-bo && npm install

# Install typings
npm run postinstall

# Run project (launch chromium-browser, so won't start on Windows)
npm start

```

## Tests :pray:

```
# Run test and generate coverage
npm run test

# See coverage
npm run coverage
```

## Dependencies :cloud:

Some dependencies are not up to date: angular2@2.0.0-beta.8 require reflect-metadata@0.1.2, es6-shim@^0.33.3 and zone.js@0.5.15 so these three dependencies can't be updated.

## Known Issues :persevere:

None for now... :triumph:
