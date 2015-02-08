(function () {
    'use strict';

    var controllerId = 'contactController';

    angular.module('app')
        .controller(controllerId, ['$scope', contactController]);

    function contactController() {
        var vm = this;
        vm.title = 'Contact';
        vm.activate = activate;

        activate();

        function activate() {

        }
    }
})();