/**
 * Created by arif on 17/5/16.
 */

var myApp = angular.module('myApp', ['ngTagsInput']);

myApp.controller('MyCtrl', function($scope, $http) {
        $scope.tags = [
            { text: 'mohammad' },
            { text: 'Arif' },
            { text: 'mujawar' },
            { text: 'Bangalore' }
        ];
        $scope.loadTags = function(query) {
            return $http.get('/tags?query=' + query);
        };
    });