(function () {
    'use strict';

    angular.module('Nohit.service')
        .service('databaseService', DatabaseService);


    DatabaseService.$inject = ['$localStorage', 'NumberStore'];
    /**
     * Database Initialisation
     * @param $localStorage
     * @constructor
     */
    function DatabaseService($localStorage, NumberStore) {
        var vm = this;

        vm.reset = function reset() {
            $localStorage.results = [];
            $localStorage.lastNumber = 0;
            $localStorage.numbers = angular.copy(NumberStore);
            $localStorage.percentage = {
                appeared : 0,
                nonAppeared : 0,
                total : 0
            };
            this.resetNohit();
        };

        vm.resetNohit = function resetNohit() {
            $localStorage.nohit = angular.copy(NumberStore);
            $localStorage.lastTwentyOutcome = [];
        };
        //results
        if (!angular.isArray($localStorage.results)) {
            $localStorage.results = [];
        }

        //results
        if (!angular.isArray($localStorage.nohit)) {
            this.resetNohit();
        }

        //Last Result Number
        if (angular.isUndefined($localStorage.lastNumber)) {
            $localStorage.lastNumber = 0;
        }

        //Last Result Number
        if (angular.isUndefined($localStorage.numbers)) {
            $localStorage.numbers = angular.copy(NumberStore);
        }

        if (!angular.isObject($localStorage.percentage)) {
            $localStorage.percentage = {
                appeared : 0,
                nonAppeared : 0,
                total : 0
            };
        }
    }
})();