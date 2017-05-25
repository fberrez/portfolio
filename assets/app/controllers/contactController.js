angular.module('contactForm', [])
    .controller('ContactController', ['$scope', function($scope) {
        $scope.master = {};

        $scope.send = function(user) {
            $scope.master = angular.copy(user);
            console.log($scope.master);
            if($scope.isOk() == true) {
                console.log("$scope ok");
                $http.post('http://localhost/portfolio-ui/script/mail.run.php', $scope.master);
            } else {
                console.log("$scope not ok");
            }
        };

        $scope.reset = function(form) {
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
            $scope.user = angular.copy($scope.master);
        };

        $scope.isOk = function() {
            return ($scope.master.name != null && $scope.master.mail != null && $scope.master.message != null);
        }

        $scope.reset();
    }]);
