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
                //a.setAttribute("href", "");
                a.classList.add("work");
                a.innerHTML = "<img alt='"+ listOfWorks[i].thumbAlt +"' src='images/works/"+ listOfWorks[i].thumbnail +"'/>";
                
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
            var obj      = this.searchWork(index),
                parent   = document.getElementsByClassName('workList')[0].parentNode,
                template = document.createElement("div"),
                text;

            this.hideWork();            

            text =  "<div class='workDetails-content'>";
            //text +=  "<header><a class='workDetails-hideButton fa fa-times fa-2x'></a></header>";
            text +=  "<img class='workDetails-image' alt='"+ obj.picAlt +"' src='images/works/"+ obj.picture +"' />";
            text +=  "<div class='workDetails-description'>";
            text +=       "<h3>"+ obj.title +"</h3>";
            text +=       "<p>"+ obj.description +"</p>";
            text +=       "<p><strong>client: </strong>"+ obj.client +"</p>";
            text +=       "<p><strong>role: </strong>"+ obj.duty +"</p>";
            text +=  "</div>";
            text += "</div>";
            
            template.innerHTML = text;
            
            template.classList.add("workDetails", "animated", "bounceIn");
            parent.appendChild(template);
        
        }
        this.hideWork = function(){
            var work = document.getElementsByClassName("workDetails");
            //     hiddenButton = document.getElementsByClassName("workDetails-hideButton")[0];
            if(work.length > 0){
                work[0].parentNode.removeChild(work[0]);
            }
            // hiddenButton.addEventListener("click", function(){
            //     work.classList.add("bounceOut");
                 //setTimeout(function(){work.parentNode.removeChild(work);}, 500);
            // });
        }
    }
});