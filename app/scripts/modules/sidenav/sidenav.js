/**
 * Created by xus on 15-1-15.
 */

'use strict';

function SidenavCtrl($scope, $location, $mdSidenav, $timeout, $rootScope, Menu, Hosts) {
  $scope.menu = Menu;

  var mainContentArea = document.querySelector('[role="main"]');

  $rootScope.$on('$locationChangeSuccess', openPage);

  $scope.closeMenu = function() {
    $timeout(function() { $mdSidenav('left').close(); });
  };

  $scope.openMenu = function() {
    $timeout(function() { $mdSidenav('left').open(); });
  };

  $scope.host = Hosts.getCurrentHostUrl();

  $rootScope.$on('$hostChangeSuccess', function (e, data) {
    $scope.host = Hosts.getCurrentHostUrl(data);
  });

  $scope.path = function() {
    return $location.path();
  };

  $scope.goHome = function() {
    $scope.menu.selectSection(null);
    $scope.menu.selectPage(null, null);
    $location.path( '/' );
  };

  function openPage() {
    $scope.closeMenu();
    mainContentArea && mainContentArea.focus();
  }
}

module.exports = function(angular) {
  angular.module('mus.sidenav', [])
    .controller('SidenavCtrl',['$scope', '$location', '$mdSidenav', '$timeout', '$rootScope', 'Menu', 'Hosts', SidenavCtrl]);
};

