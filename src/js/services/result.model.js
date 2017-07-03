(function(){
  'use strict';

  angular.module('Nohit.service')
    .service('Result', Result);


  Result.$inject = ['$localStorage', 'uscore', 'NumberStore', '$timeout'];
  /**
   * Result Module
   * @param $localStorage
   * @constructor
   */
  function Result($localStorage, uscore, NumberStore, $timeout){
    var vm = this;

    //Methods
    this.add = add;
    this.getLastResult = getLastResult;
    this.undo = undo;

    //add new result
    function add(num) {
      var n = uscore.find(NumberStore, {number:num});
      var ns = uscore.find($localStorage.numbers, {number:num});
      //increase by one
      ++ns.count;
      //add to result
      $localStorage.results.unshift(n);
      vm.getLastResult();
    }

    function getLastResult(){
      $localStorage.lastNumber = uscore.first($localStorage.results);
    }

    function undo(){
      $localStorage.results.shift();
      vm.getLastResult();
    }
  }
})();