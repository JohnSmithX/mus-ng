'use strict';

var angular = require('angular'); // That's right! We can just require angular as if we were in node


require('angular-resource');
require('angular-aria');
require('angular-animate');
require('hammerjs');
require('angular-material');
require('./services')(angular);
require('./filter/filters')(angular);
require('./modules/sidenav/sidenav')(angular);

//controllers



var app = angular.module('myApp', ['ngResource', 'ngMaterial', 'mus.filters', 'mus.sidenav', 'mus.services']);








