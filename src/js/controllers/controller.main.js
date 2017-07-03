(function(){
  'use strict';

  angular.module('Nohit.controller').controller('MainController', Main);

  Main.$inject = ['$localStorage', '$rootScope'];

  function Main($localStorage, $rootScope){
    var vm = this;
    vm.title = 'Roulette';

    vm.$storage = $localStorage;

  }
})();
