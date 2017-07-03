(function () {
    'use strict';

    angular.module('Nohit.controller')
        .controller('ResultController', ResultController);

    ResultController.$inject = ['$localStorage', 'databaseService', 'Result', 'uscore'];
    /**
     * Result Controller
     * @param $localStorage
     * @constructor
     */
    function ResultController($localStorage, databaseService, Result, uscore) {
        var vm = this;
        //keypad number 0-36
        vm.keypadNumbers = getKeypadNumbers();

        //METHODS
        this.addResult = addResult;
        this.undoResult = undoResult;
        this.reset = reset;

        //add new result
        function addResult(num) {
            Result.add(num);
            last20();
        }

        function last20() {
            databaseService.resetNohit();

            var len = $localStorage.results.length;
                var i = 0;
                while (i < $localStorage.results.length){
                    var result = $localStorage.results[i];
                    if($localStorage.nohit.length > 18){
                        uscore.remove($localStorage.nohit, {number: result.number});
                    }
                    i++;
                }
        }


        /**
         * undo last result
         *
         * Steps
         * 1. Find mistaken number of street
         * 2. Decrease session by 1.
         * 3. Reset back unit from backup.
         *
         * 4. Reset Result to back position
         * 5. Find current number
         *
         *
         */
        function undoResult() {
            Result.undo();
            last20();
        }

        //reset database to default position
        function reset() {
            databaseService.reset();
        }

        //private methods

        /**
         * Methods
         * @returns {Array}
         */
        function getKeypadNumbers() {
            var numbs = [];
            for (var i = 0; i <= 36; i++) {
                numbs.push(i);
            }
            return numbs;
        }


    }
})();
