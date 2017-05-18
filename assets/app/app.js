var app = angular.module('persoWebSiteApp', ['pascalprecht.translate']);

/* Angular-translate controller */
app.controller('TranslateCtrl', ['$translate', '$scope', function ($translate, $scope) {

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };

}]);

