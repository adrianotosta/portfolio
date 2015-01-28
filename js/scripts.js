(function () {
	
	'use strict';
///////////////////////////////////////////////////////////////////////////////////
/*VARIABLES*/
///////////////////////////////////////////////////////////////////////////////////	
	var body      = document.body,
        content   = document.body.getElementsByTagName('div')[0],
        section   = content.getElementsByTagName("section"),
		nav       = document.getElementsByClassName('menu'),
		navButton = nav[0].getElementsByTagName('a');
///////////////////////////////////////////////////////////////////////////////////
/*MENU*/
///////////////////////////////////////////////////////////////////////////////////
    //content.style.position = "absolute";
    for(var i = 0; i < navButton.length; i++){
        (function(index){
           navButton[index].onclick = function(){
               (function animation(){
                   if(body.scrollTop < section[index].offsetTop){
                       body.scrollTop += 10;
                       var scroll = setTimeout(animation, 10);

                       if(body.scrollTop >= section[index].offsetTop){
                           clearTimeout(scroll);
                       }    
                   }else{
                       body.scrollTop -= 10;
                       var scroll = setTimeout(animation, 10);

                       if(body.scrollTop <= section[index].offsetTop){
                           clearTimeout(scroll);
                       }
                   }
                   console.log(body.scrollTop + "------" + section[index].offsetTop);
               }()); 
           }; 
        }(i));
    }
    
    var app = angular.module("myApp", ["worksList"]);
    
    app.config(function($interpolateProvider){
        $interpolateProvider.startSymbol('[[').endSymbol(']]');
    });
    
    app.controller("worksController", function($scope, worksListService){
        
        $scope.works = worksListService.workList;
        
        $scope.loadingDetails = function(id){
            $scope.details = $scope.works[id];
            worksListService.showWorkDetail();
        }
        
        $scope.unloadingDetails = function(){
            worksListService.showWorkDetail();
        }
    });
    
    
    angular.bootstrap(document, ["myApp"]);
}());