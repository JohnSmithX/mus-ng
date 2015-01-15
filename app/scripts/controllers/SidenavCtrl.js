/**
 * Created by xus on 15-1-15.
 */

'use strict';

exports.AppCtrl = function($scope, $timeout, $mdSidenav, $log) {
  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle()
      .then(function(){
        $log.debug("toggle left is done");
      });
  };
  $scope.toggleRight = function() {
    $mdSidenav('right').toggle()
      .then(function(){
        $log.debug("toggle RIGHT is done");
      });
  };
};
exports.LeftCtrl =  function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    $mdSidenav('left').close()
      .then(function(){
        $log.debug("close LEFT is done");
      });
  };
};

exports.RightCtrl = function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
      $mdSidenav('right').close()
        .then(function(){
          $log.debug("close RIGHT is done");
        });
    };
};
