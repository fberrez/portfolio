angular.module('contactForm', [])
    .controller('ContactController', ['$scope', function($scope) {
        $scope.master = {};

        $scope.send = function(user) {
            $scope.master = angular.copy(user);
            //$http.post('http://localhost', $scope.formData)
        };

        $scope.reset = function(form) {
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();
    }]);
