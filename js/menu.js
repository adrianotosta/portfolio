define(["jquery"], function($){
    return function Menu(){
        var body    = $("body"),
            section = body.children("div").find("section");
        
        this.scroll = function(index){
            body.animate({scrollTop: section.eq(index).offset().top}, 1000);
        }
        
    };
});