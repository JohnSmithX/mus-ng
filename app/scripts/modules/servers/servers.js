/**
 * Created by xus on 15-1-25.
 */

'use strict';




module.exports = function (angular) {
  angular.module('mus.servers.ctrl', [])
    .config(['$stateProvider',
      function ($stateProvider) {
        $stateProvider.
          state('servers', {
            url: '/servers',
            templateUrl: 'js/templates/servers/servers.tpl.html'
          })
          .state('server', {
            url: '/servers/:Id',
            templateUrl: 'js/templates/servers/server.tpl.html'
          })
          .state('serverLogs', {
            url: '/containers/{Id}/logs',
            templateUrl: 'js/templates/servers/server.logs.tpl.html'
          });
      }
    ]);
};
