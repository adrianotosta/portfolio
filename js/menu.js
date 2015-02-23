define(["jquery"], function($){
    return function Menu(){
        var body    = $("body"),
            section = body.children("div").find("section"),
            works   = body.find(".worksList");
        
        this.scroll = function(index){
            var position = section.eq(index).offset().top;
            body.animate({scrollTop: position},1000);
        }
        
    };
});