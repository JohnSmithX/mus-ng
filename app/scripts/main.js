'use strict';

var angular = require('angular'); // That's right! We can just require angular as if we were in node

require('angular-material');
require('angular-resource');

//controllers
var SidenavCtrl = require('./controllers/SidenavCtrl');

//servers
var Menu = require('./services/menu');
var Hosts = require('./services/hosts');

var app = angular.module('myApp', ['ngResource', 'ngMaterial']);

app.factory('Menu', ['$rootScope', '$location', Menu])
  .factory('Hosts', ['$resource', Hosts]);

app.controller('SidenavCtrl',['$scope', '$location', '$mdSidenav', '$timeout', '$rootScope', 'Menu', 'Hosts', SidenavCtrl]);




