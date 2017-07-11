(function () {
    'use strict';

    angular.module('Nohit.controller')
        .controller('ResultController', ResultController);

    ResultController.$inject = ['$localStorage', 'databaseService', 'Result', 'uscore', 'SampleData', '$scope', '$rootScope'];
    /**
     * Result Controller
     * @param $localStorage
     * @constructor
     */
    function ResultController($localStorage, databaseService, Result, uscore, SampleData, $scope, $rootScope) {
        var vm = this;
        //keypad number 0-36
        vm.keypadNumbers = getKeypadNumbers();

        //METHODS
        this.addResult = addResult;
        this.undoResult = undoResult;
        this.reset = reset;
        this.recalculate = recalculate;
        this.analyseFromSampleData = analyseFromSampleData;
        vm.wheel = {
            left : [1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19],
            right : [4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33]
        };

        $scope.limit = 20;

        //add new result
        function addResult(num) {
            Result.add(num);
            addAppearanceHistory();
            seenNumbers();
        }

        function seenNumbers() {
            var last20;
            databaseService.setOutcome();

            var len = $localStorage.results.length;
            if(len < $scope.limit){
                return;
            }

            last20 = $localStorage.results.slice(0, $scope.limit);

            angular.forEach(last20, function (result) {
                uscore.remove($localStorage.outcome.unseen, {number: result.number});

                if(!uscore.find($localStorage.outcome.seen, {number: result.number})){
                    $localStorage.outcome.seen.unshift(result);
                }
            });
        }

        function addAppearanceHistory() {
            var len = $localStorage.results.length;
            if(len < $scope.limit){
                return;
            }
            $rootScope.total++;
            // if(vm.wheel.left.indexOf($localStorage.lastNumber.number) !== -1){
            //     $localStorage.reports.unshift({
            //         seen : 0,
            //         unseen: 1
            //     });
            // }else if(vm.wheel.right.indexOf($localStorage.lastNumber.number) !== -1){
            //     $localStorage.reports.unshift({
            //         seen : 1,
            //         unseen: 0
            //     });
            // }



            if(uscore.find($localStorage.outcome.unseen, { number : $localStorage.lastNumber.number})){
                // $rootScope.position.loss += $localStorage.outcome.seen.length;
                var l = $localStorage.outcome.unseen.length;
                $rootScope.position.win += 36-l;

                $rootScope.unseen++;
                $localStorage.reports.unshift({
                    seen : 0,
                    unseen: 1
                });
            }else{
                $rootScope.position.loss += $localStorage.outcome.unseen.length;
                // var l = $localStorage.outcome.seen.length;
                // $rootScope.position.win += 36-l;




                $rootScope.seen++;
                $localStorage.reports.unshift({
                    seen : 1,
                    unseen: 0
                });

            }
        }

        function undoAppearanceHistory() {
            $localStorage.reports.shift();
        }


        function recalculate() {
            var results = uscore.reverse(angular.copy($localStorage.results));
            databaseService.reset();

            angular.forEach(results, function (result) {
                addResult(result.number);
            });
        }

        function analyseFromSampleData() {
            var data = uscore.reverse(SampleData);
            // var data = SampleData;
            databaseService.reset();

            angular.forEach(data, function (num) {
                addResult(num);
            });
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
            undoAppearanceHistory();
            seenNumbers();
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
