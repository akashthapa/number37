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
            $localStorage.reports = [];
            $localStorage.lastNumber = 0;
            $localStorage.numbers = angular.copy(NumberStore);
            this.setOutcome();
        };

        vm.setOutcome = function setOutcome() {
            $localStorage.outcome = {
                db: [],
                unseen: angular.copy(NumberStore),
                seen: []
            };
        };


        //results
        if (!angular.isArray($localStorage.results)) {
            $localStorage.results = [];
        }
//results
        if (!angular.isArray($localStorage.reports)) {
            $localStorage.reports = [];
        }

        //results
        if (!angular.isObject($localStorage.outcome)) {
            this.setOutcome();
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