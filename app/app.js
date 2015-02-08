(function () {
    'use strict';

    // TODO: Inject modules as needed.
    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute'           // routing

        // Custom modules 

        // 3rd Party Modules

    ]);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{ templateUrl: 'app/home/home.html', title: 'home'})
            //.when('/blog',{ templateUrl: 'app/blog/blog.html', title: 'blog'})
            .when('/about',{ templateUrl: 'app/about/about.html', title: 'about'})
            .when('/contact',{ templateUrl: 'app/contact/contact.html', title: 'contact'})
            .otherwise({ redirectTo: '/' });
    }]);

    // Execute bootstrapping code and any dependencies.
    // TODO: inject services as needed.
    app.run(['$rootScope',
        function ($rootScope) {

        }]);
})();