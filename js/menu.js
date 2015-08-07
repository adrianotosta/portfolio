define(["jquery"], function($){
    return function Menu(){
        var body    = $("body, html"),
            section = body.children("div").find("section");
        
        this.scroll = function(index){
            var position = section.eq(index).offset().top;
            body.animate({scrollTop: position},1000);
        }  
    };
});