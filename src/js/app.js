angular.module('Nohit', [
  'ngRoute',
  'mobile-angular-ui',
  'Nohit.service',
  'Nohit.controller',
  'ngStorage'
]).config(config);

/**
 * Config
 */
config.$inject = ['$routeProvider'];
function config($routeProvider){
  //route
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    reloadOnSearch: false,
    controller: 'HomeController',
    controllerAs: 'home'
  });

}