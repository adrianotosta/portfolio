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
        $interpolateProvider.startSymbol('[%').endSymbol('%]');
    });
    
    app.controller("worksController", function($scope, worksListService){
        $scope.works = worksListService.workList;
    });
    
    
    angular.bootstrap(document, ["myApp"]);
    
//    console.log(section[0].offsetTop);
//	console.log(section[1].offsetTop);
//	console.log(section[2].offsetTop);
//	console.log(section[3].offsetTop);
}());

/*
 98
scripts.js:34 393
scripts.js:35 1029
scripts.js:36 1604
*/

/*





	var nav = document.getElementsByClassName('nav-menu')[0],
			content = document.body.getElementsByTagName('div')[0],
			sectionChildren = content.querySelectorAll('section.animated'),
			windowHeight = window.innerHeight + "px",
			navButton = nav.getElementsByTagName('a');
	
	var animationScroll = {
		init: function(){
			content.style.position = 'relative'; 
			content.style.top = '0px';	
		},
		moveTop: function(){
			content.style.top = parseInt(content.style.top) - 100 + 'px';
			var action = setTimeout(animationScroll.moveTop, 20);

			if(content.offsetTop <= -300 ){
				clearTimeout(action);
				alert(content.offsetTop);
				console.log(action);
			}
		},
		moveStop: function(){
			clearTimeout(action);
		}
	}
	
	//add height on the section
	for(var i = 0; i < sectionChildren.length; i++){
		sectionChildren[i].style.minHeight = windowHeight;
	}
	
	//click menu active scroll
	nav.addEventListener("click", function(){
		animationScroll.init();
		animationScroll.moveTop
	}, false);









































animation = {
				init: function(){
					content.style.position = 'relative'; 
					content.style.top = '0px';	
				},
				moveTop: function(){
					content.style.top = parseInt(content.style.top) - 10 + 'px';
					var action = setTimeout(animation.moveTop, 20);

					if(content.offsetTop <= -300 ){
						clearTimeout(action);
						alert(content.offsetTop);
						console.log(action);
					}

				},
				moveStop: function(){
					clearTimeout(action);
				}
			};
	//console.log(section);
	
	//for(var i = 0; i < section.length; i++){
		//sectionChildren[i].style.minHeight = document.body.height;
	//}

	animation.init();
	
	navButton[0].onclick = function () {	
		animation.moveTop();
	}






















var buttonMenu = $(".nav-pills-gnuolane a"),
			section = $("body > .container-fluid > section"),
			content = $('html, body'),
			heightWindow = $(window).height() + "px";
	
	//seta as alturas das sections
	$.each(section, function(){
		$(this).css("min-height", heightWindow);
	});
	
	////seta as alturas das sections se a janela for redimensionada
	/*$(window).resize(function(){
		$.each(section, function(){
			$(this).css("min-height", $(this).height());
		});
	});*/

	//scroll do menu
	/*buttonMenu.on("click", function() {
		var indexParent = $(this).parent().index(),
				sectionContent = section.eq(indexParent),
				positions = [];
		
		content.animate({
				scrollTop: sectionContent.offset().top - 100
		}, 2000);
	});
	
	
	
	$(window).on("scroll", function(){
		var scrollPosition = $(this).scrollTop();
		
		if(scrollPosition >= 300){
			section.eq(1).delay(2000).addClass("fadeIn");
		}
		
		if(scrollPosition >= 1000){
			section.eq(2).delay(2000).addClass("bounceInRight");
		}
	});*/