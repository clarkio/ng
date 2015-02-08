(function () {
    'use strict';

    var controllerId = 'aboutController';

    angular.module('app')
        .controller(controllerId, ['$scope', aboutController]);

    function aboutController() {
        var vm = this;
        vm.title = 'About';
        vm.activate = activate;

        activate();

        function activate() {

        }
    }
})();