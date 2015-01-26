/**
 * Created by xus on 15-1-26.
 */


'use strict';




module.exports = function (angular) {
  angular.module('mus.welcome', [])
    .config(['$stateProvider',
      function ($stateProvider) {
        $stateProvider.
          state('welcome', {
            url: '/',
            templateUrl: 'js/templates/welcome.tpl.html'
          });
      }
    ]);
};