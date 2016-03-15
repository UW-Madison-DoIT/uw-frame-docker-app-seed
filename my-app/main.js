define([
    'angular',
    'require',
    'portal/settings/route',
    //insert route(s).js files here
    './sample/routes',
    'portal',
    'app-config',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    //insert path to modules (like controllers, services, etc...) here
    './sample/directives',
    './sample/controllers',
    './sample/services'
], function(angular, require, settingsRoute, sampleRoutes) {

    var app = angular.module('my-app', [
        'app-config',
        'ngRoute',
        'ngSanitize',
        'ngStorage',
        'portal',
        'my-app.sample.directives',
        'my-app.sample.controllers',
        'my-app.sample.services'
    ]);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
        $routeProvider.
            when('/settings', settingsRoute).
            when('/home', sampleRoutes.home).
            otherwise({ redirectTo : '/home'});
    }]);


    return app;

});
