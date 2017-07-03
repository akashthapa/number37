angular.module('Nohit', [
  'ngRoute',
  'mobile-angular-ui',
  'Nohit.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});