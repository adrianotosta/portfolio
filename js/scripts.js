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
            "colors": ["#E44D26", "#F16529"],
            "rank": -12
        },
        {
            "name": "css3",
            "colors": ["#93290d", "#29f167"],
            "rank": -5
        },
        {
            "name": "sass",
            "colors": "",
            "rank": 1
        },
        {
            "name": "javascript",
            "colors": "",
            "rank": 1
        },
        {
            "name": "jquery",
            "colors": "",
            "rank": 1
        },
        {
            "name": "angular",
            "colors": "",
            "rank": 1
        },
        {
            "name": "php",
            "colors": "",
            "rank": 1
        },
        {
            "name": ".Net MVC 4",
            "colors": "",
            "rank": 1
        },
        {
            "name": "photoshop",
            "colors": "",
            "rank": 1
        },
        {
            "name": "illustrator",
            "colors": "",
            "rank": 1
        }
    ];
    
    for(i in listSkill){
        //fill
        skills.fillStyle = "#f40835";//listSkill[i].colors[1];
        skills.fillRect(((i * 50) + (10 * i)), 250, 50, listSkill[i].rank);
        //stroke
        skills.strokeStyle = "#fff";//listSkill[i].colors[0];
        skills.strokeRect(((i * 50) + (10 * i)), 250, 50, -144);
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
