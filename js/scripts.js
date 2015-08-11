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
                navButton[index].onclick = function(event){
                    //ga('send', 'event', 'link', 'click', index);
                    menu.scroll(index);
                    return false;
                };
            }(i));
        }
    });
///////////////////////////////////////////////////////////////////////////////////
/*WORKS*/
///////////////////////////////////////////////////////////////////////////////////   
    require(["works"], function(Works){
        var works = new Works(),
            link  = document.getElementsByClassName("work");
        
        works.showWorksList(works.loadWorksList(0,8));
        for(var i = 0; i < link.length; i++){
            (function(key){
                link[key].onclick = function(){
                    //ga('send', 'event', 'link', 'click', key);
                    works.showWork(this.getAttribute("id"));
                }
            }(i));
        }
    });
///////////////////////////////////////////////////////////////////////////////////
/*GRAPH*/
///////////////////////////////////////////////////////////////////////////////////
    require(["chart"], function(Chart){
        var graph = new Chart();
        graph.createChart();
    });
}());