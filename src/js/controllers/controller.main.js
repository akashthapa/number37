(function () {
    'use strict';

    angular.module('Nohit.controller').controller('MainController', Main);

    Main.$inject = ['$localStorage', '$rootScope'];

    function Main($localStorage, $rootScope) {
        var vm = this;
        vm.title = 'Roulette';

        vm.$storage = $localStorage;

        $rootScope.i = 0;
        $rootScope.total = 0;
        $rootScope.seen = 0;
        $rootScope.unseen = 0;
        $rootScope.position = {
            win: 0,
            loss: 0
        };

    }
})();
