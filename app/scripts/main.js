'use strict';

var angular = require('angular'); // That's right! We can just require angular as if we were in node

require('angular-material');


var WelcomeCtrl = require('./controllers/WelcomeCtrl'); // We can use our WelcomeCtrl.js as a module. Rainbows.
var SidenavCtrl = require('./controllers/SidenavCtrl');

var app = angular.module('myApp', ['ngMaterial']);


app.controller('WelcomeCtrl', ['$scope', WelcomeCtrl])
  .controller('AppCtrl',['$scope', '$timeout', '$mdSidenav', '$log', SidenavCtrl.AppCtrl])
  .controller('LeftCtrl', ['$scope', '$timeout', '$mdSidenav', '$log', SidenavCtrl.LeftCtrl])
  .controller('RightCtrl', ['$scope', '$timeout', '$mdSidenav', '$log', SidenavCtrl.RightCtrl]);
