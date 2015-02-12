define(["jquery"], function($){
    return function Menu(){
        var body    = $("body"),
            section = body.children("div").find("section");
        
        this.scroll = function(index){
            body.animate({scrollTop: section.eq(index).offset().top}, 1000);
            console.log(index);
        }
        
    };
});
//        body.animate({scrollTop: $("body > div > section:eq(1)").offset().top}, 1000);
//        this.positionElement = function(element){
//            for(var i = 0; i < element.parentNode.children.length; i++){
//                if(element.parentNode.children.item(i) == element){
//                    return i;
//                }
//                return -1;
//            }
//        }