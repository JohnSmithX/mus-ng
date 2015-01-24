/**
 * Created by xus on 15-1-24.
 */

'use strict';

module.exports = function(angular) {

  angular.module('mus.filters', [])
    .filter('unescape', ['$window', function ($window) {
      return function (url) {
        return url ? $window.decodeURIComponent($window.decodeURIComponent(url)) : '';
      };
    }]);
};