(function () {
  'use strict';

  angular.module('Nohit.controller')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$localStorage'];

  function HomeController($localStorage) {
    var vm = this;
    vm.title = 'Welcome';
  }

})();
