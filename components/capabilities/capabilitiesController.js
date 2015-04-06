'use strict';

/* Refstack Capabilities Controller */

var refstackApp = angular.module('refstackApp');

refstackApp.controller('capabilitiesController', ['$scope', '$http', function($scope, $http) {
    $scope.version = "2015.03";
    $scope.update = function() {
        //Rate-limiting is an issue right now with this url. Using a local copy instead.
        //var content_url = 'https://api.github.com/repos/openstack/defcore/contents/'.concat($scope.version, '.json');
        var content_url = 'assets/capabilities/'.concat($scope.version, '.json');
        $http.get(content_url).success(function(data) {
            $scope.data = data;
            $scope.capabilities = JSON.parse(atob($scope.data.content.replace(/\s/g, '')));
        }).error(function(error) {
            console.log(error);
            $scope.capabilities = "Error retrieving capabilities."; 
        });
    }
    $scope.update()

}]);


