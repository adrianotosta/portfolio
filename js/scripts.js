(function () {
	
	'use strict';
///////////////////////////////////////////////////////////////////////////////////
/*VARIABLES*/
///////////////////////////////////////////////////////////////////////////////////	
	var body      = document.body,
        content   = document.body.getElementsByTagName('div')[0],
        section   = content.getElementsByTagName("section"),
		nav       = document.getElementsByClassName('menu'),
		navButton = nav[0].getElementsByTagName('a'),
        canvas    = document.getElementById("skills"),
        skills    = canvas.getContext("2d");
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
///////////////////////////////////////////////////////////////////////////////////
/*CANVAS-SKILLS*/
///////////////////////////////////////////////////////////////////////////////////
    var listSkill = [
        {
            "name": "html 5",
            "rank": 40
        },
        {
            "name": "css3",
            "rank": 60
        },
        {
            "name": "sass",
            "rank": 30
        },
        {
            "name": "javascript",
            "rank": 55
        },
        {
            "name": "jquery",
            "rank": 80
        },
        {
            "name": "angular",
            "rank": 30
        },
        {
            "name": "php",
            "rank": 30
        },
        {
            "name": ".Net MVC 4",
            "rank": 30
        },
        {
            "name": "photoshop",
            "rank": 70
        },
        {
            "name": "illustrator",
            "rank": 60
        }
    ];
    var percentage = function(rank){
        return ((rank / 100) * 144) * -1;
    }
    for(i in listSkill){
        //fill
        skills.fillStyle = "#b6dd11";
        skills.fillRect(((i * 50) + (10 * i)), 150, 50, percentage(listSkill[i].rank));
        //stroke
        skills.strokeStyle = "#b6dd11";
        skills.strokeRect(((i * 50) + (10 * i)), 150, 50, -144);
    }
///////////////////////////////////////////////////////////////////////////////////
/*WORKS*/
///////////////////////////////////////////////////////////////////////////////////
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
