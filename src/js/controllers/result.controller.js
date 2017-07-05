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
        var limit = 21;
        //keypad number 0-36
        vm.keypadNumbers = getKeypadNumbers();

        //METHODS
        this.addResult = addResult;
        this.undoResult = undoResult;
        this.reset = reset;

        //add new result
        function addResult(num) {
            Result.add(num);
            calculatePercentage();
            last20NotSeenNumbers();
        }

        function last20NotSeenNumbers() {
            var last20;
            databaseService.resetNohit();

            var len = $localStorage.results.length;
            if(len < limit){
                return;
            }

            last20 = $localStorage.results.slice(0, limit);

            angular.forEach(last20, function (result) {
                uscore.remove($localStorage.nohit, {number: result.number});

                if(!uscore.find($localStorage.lastTwentyOutcome, {number: result.number})){
                    $localStorage.lastTwentyOutcome.unshift(result);
                }
            });

            angular.forEach($localStorage.lastTwentyOutcome, function (outcome) {
                var numbers = uscore.filter(last20, { number : outcome.number });
                if(numbers.length > 1){
                    uscore.remove($localStorage.lastTwentyOutcome, { number : outcome.number });
                }
            });
        }

        function calculatePercentage() {

            var len = $localStorage.results.length;
            console.log("len", len);
            if(len < limit){
                return;
            }

            $localStorage.percentage.total++;

            if(uscore.find($localStorage.nohit, { number : $localStorage.lastNumber.number})){
                $localStorage.percentage.nonAppeared++;
            }else{
                $localStorage.percentage.appeared++;
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
            last20NotSeenNumbers();
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
