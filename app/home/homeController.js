(function () {
    'use strict';

    var controllerId = 'homeController';

    angular.module('app')
        .controller(controllerId, ['$scope', homeController]);

    function homeController() {
        var vm = this;
        vm.title = '';
        vm.activate = activate;

        activate();

        function activate() {

        }
    }
})();