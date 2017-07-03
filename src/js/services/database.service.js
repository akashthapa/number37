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
            this.resetNohit();
        };

        vm.resetNohit = function resetNohit() {
            $localStorage.nohit = angular.copy(NumberStore);
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
    }
})();