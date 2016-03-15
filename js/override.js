define(['angular'], function(angular) {
    var config = angular.module('override', []);
    config
        //see http://uw-madison-doit.github.io/uw-frame/latest/#/md/configuration for howto
        .constant('OVERRIDE', {
          'APP_FLAGS' : {
            'debug' : true,
            'defaultTheme' : 0
          },
          'MISC_URLS' : {
            'rootURL' : '/'
          },
          'NAMES' : {
            'title' : 'My App Seed Name',
            'fname' : 'app-seed-fname'
          },
          'APP_BETA_FEATURES' : [
            {
              "id" : "someAdditionalBetaFeature",
              "title" : "App Seed Beta Feature",
              "description" : "This is just an example of a toggle. Look at your localStorage after you switch this on for the first time."
            }
          ]
        })

    return config;

});
