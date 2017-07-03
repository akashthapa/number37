(function(){
  'use strict';

  angular.module('Nohit.service')
    .factory('uscore', function(){
      return window._.noConflict();
    });
})();