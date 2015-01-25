/**
 * Created by xus on 15-1-24.
 */

'use strict';

var hosts = require('./hosts');
var menu  = require('./menu');

module.exports = function (angular) {
  angular.module('mus.services', ['ngResource'])
    .factory('Hosts', ['$resource', hosts])
    .factory('Menu', ['$rootScope', '$location', menu]);
};
