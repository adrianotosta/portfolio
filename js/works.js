define(["worksList"], function(worksList){
    return function Works(){
        this.loadWorksList = function(start, end){
            var arr = [];
            for(var i = start; i < end; i++){
                arr.push(worksList[i]);
            }
            return arr;
        }
        this.showWorksList = function(listOfWorks){
            var list = document.getElementsByClassName("workList")[0];

            for (var i = 0; i < listOfWorks.length; i++){
                var li = document.createElement("li"),
                    a  = document.createElement("a");
                
                a.setAttribute("id", listOfWorks[i].id);
                a.classList.add("work");
                a.innerHTML = "<img src='../images/works/"+ listOfWorks[i].thumbnail +"'/>";
                
                li.appendChild(a);
                
                list.appendChild(li);
            }

        }
        this.searchWork = function(id){
            for (var i = 0; i < worksList.length; i++){
                if(worksList[i].id == id){
                    return worksList[i];
                    break;
                }
            }
        }
        this.showWork = function(index){
            var obj          = this.searchWork(index),
                sibling      = document.getElementsByClassName("worksList")[0],
                template     = document.createElement("div"),
                text;
            
            text =  "<header><a class='workDetail-hideButton fa fa-times fa-2x'></a></header>";
            text +=     "<div class='row'>";
            text +=         "<div class='workDetail-image'>";
            text +=             "<img alt='' src='images/works/"+ obj.picture +"' />";
            text +=         "</div>";
            text +=         "<div class='workDetail-description'>";
            text +=             "<h2>"+ obj.title +"</h2>";
            text +=             "<p>"+ obj.description +"</p>";
            text +=             "<p><strong>client: </strong>"+ obj.client +"</p>";
            text +=             "<p><strong>role: </strong>"+ obj.duty +"</p>";
            text +=         "</div>";
            text +=     "</div>";
            
            template.innerHTML = text;
            
            template.classList.add("workDetail", "animated", "bounceIn");
            sibling.parentNode.insertBefore(template, sibling);
            
            this.hideWork();
            
        }
        this.hideWork = function(){
            var work   = document.getElementsByClassName("workDetail")[0],
                hiddenButton = document.getElementsByClassName("workDetail-hideButton")[0];
            
            hiddenButton.addEventListener("click", function(){
                work.classList.add("bounceOut");
                setTimeout(function(){work.parentNode.removeChild(work);}, 500);
            });
//            
        }
    }
});