angular.module( 'ngBoilerplate', [
    'templates-app',
    'templates-common',
    'ngBoilerplate.home',
    'ngBoilerplate.search',
    'ngBoilerplate.details',
    'ngBoilerplate.myBooks',
    'localStorageModule',
    'ngResource'
])

    .config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.otherwise( '/home' );
    })

    .run( function run ($rootScope, $timeout, LocalStorageService) {

        $rootScope.counter = LocalStorageService.getCount();
    })

    .controller( 'AppCtrl', function AppCtrl ( $scope, $location, LocalStorageService ) {
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            if ( angular.isDefined( toState.data.pageTitle ) ) {
                $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
            }
        });
    })
;

