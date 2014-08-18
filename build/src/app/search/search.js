

angular.module( 'ngBoilerplate.search', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'search', {
            url: '/search',
            views: {
                "main": {
                    controller: 'SearchCtrl',
                    templateUrl: 'search/search.tpl.html'
                }
            },
            data:{ pageTitle: 'search' }
        });
    })

    .controller( 'SearchCtrl', function SearchCtrl( $scope, BookService, $location ) {

        $scope.searchTerm = "America";

        $scope.doSearch = function () {
            BookService.search($scope.searchTerm).then(function(response) {
                BookService.cached.url = '?query=' + $scope.searchTerm;
                $scope.bookResults = response.items;
                $scope.orderProp = 'volumeInfo.title';
            });
        };
    })

    .factory('BookService', function ($resource) {
        var books = {
            cached: []
        };

        books.api = $resource('https://www.googleapis.com/books/v1/volumes',
            {
                maxResults: '10',
                callback: 'JSON_CALLBACK',
                key: 'AIzaSyATldFLGtPPZVLecasP0nFXkX6RqXa7VEI'
            },
            {
                get: {
                    method: 'JSONP'
                }
            });

        books.search = function(term) {
            return books.api.get({ q: term }).$promise.then(function (response) {
                books.cached = response.items;
                return response;
                // by returning response as it was passed into this function,
                // the controller can use this promise too, as it does above
            });
        };

        return books;
    })
;