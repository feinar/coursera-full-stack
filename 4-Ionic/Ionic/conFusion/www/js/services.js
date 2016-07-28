'use strict';

angular.module('conFusion.services', ['ngResource'])
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {            
  
            this.getDishes = function(){
                
                return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
                
            };


            this.getPromotion = function () {            
            
                return $resource(baseURL+"promotions/:id",null,  {'update':{method:'PUT' }});

            };             
    
                        
        }])

        .service('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {            
 
            this.getLeaders = function(){
                
                return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});
                
            };              
                            
        }])

		.service('feedbackFactory',['$resource', 'baseURL', function($resource,baseURL) {        
     
            this.getFeedback = function(){
                 return $resource(baseURL + "feedback/:id", null, {'save':{method:'POST'}});
            };

 		}])

        .factory('favoriteFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
            var favFac = {};
            var favorites = [];
            favFac.addToFavorites = function (index) {
                for (var i = 0; i < favorites.length; i++) {
                    if (favorites[i].id == index)
                        return;
                }
                favorites.push({id: index});
            };

            return favFac;
        }])




;