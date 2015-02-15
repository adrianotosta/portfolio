(function(){
  'use strict';  
///////////////////////////////////////////////////////////////////////////////////
/*VARIABLES*/
///////////////////////////////////////////////////////////////////////////////////
    var body      = document.body,
        nav       = body.getElementsByClassName("menu")[0],
        navButton = nav.getElementsByTagName("a");
///////////////////////////////////////////////////////////////////////////////////
/*REQUIRE CONFIG*/
///////////////////////////////////////////////////////////////////////////////////
    require.config({
        baseUrl: "js",
        paths: {
            "jquery": "vendor/jquery-2.1.1.min"
        }
    });
///////////////////////////////////////////////////////////////////////////////////
/*MENU*/
///////////////////////////////////////////////////////////////////////////////////
    require(["menu"], function(Menu){
        var menu = new Menu();
        
        for(var i = 0; i < navButton.length; i++){
            (function(index){
                navButton[index].onclick = function(){
                    menu.scroll(index);
                };
            }(i));
        }
    });
///////////////////////////////////////////////////////////////////////////////////
/*WORKS*/
///////////////////////////////////////////////////////////////////////////////////   
    require(["works"], function(Works){
        var works = new Works(),
            li  = document.getElementsByClassName("worksList-item");
        
        works.showWorksList(works.loadWorksList(0,8));
        
//        for(var i = 0; i < li.length; i++){
//            (function(index){
//                li[index].addEventListener("click", function(){
//                    works.showWork(this.getElementsByTagName("a")[0].getAttribute("id"));
//                });
//            }(i));
//        }
    });
}());