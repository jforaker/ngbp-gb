/**
 * Created by jakeforaker on 8/15/14.
 */

// Service definition
angular.module('ngBoilerplate.detailsService', ['localStorageModule'])
    .service('detailsService', function(){
        this.values = {};
        this.sayHello = function(text){
            //return this.values.volumeInfo;
        };
    })


;

