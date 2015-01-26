'use strict';

var angular = require('angular'); // That's right! We can just require angular as if we were in node


require('angular-resource');
require('angular-aria');

require('angular-ui-router');
require('angular-animate');
require('hammerjs');
require('angular-material');
require('./services')(angular);
require('./filter/filters')(angular);

require('./modules/welcome/welcome')(angular);
require('./modules/sidenav/sidenav')(angular);
require('./modules/servers/servers')(angular);

//controllers



var app = angular.module('myApp', [
  'ngResource',
  'ngAnimate',
  'ngMaterial',
  'ui.router',
  'mus.filters',
  'mus.sidenav',
  'mus.services',
  'mus.servers.ctrl',
  'mus.welcome'
]);



app.config([
  '$locationProvider',
  '$urlRouterProvider',
  function($locationProvider, $urlRouterProvider) {

    // Redirect to home view when route not found
    $urlRouterProvider.otherwise('/');

  }
]);





