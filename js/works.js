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
            var list = document.getElementsByClassName("worksList")[0];
            
            for (var i = 0; i < listOfWorks.length; i++){
                li = document.createElement("li");
                li.classList.add("worksList-item");
                li.innerHTML = "<a id="+listOfWorks[i].id+"><img src='images/works/"+ listOfWorks[i].thumbnail +"'/></a>";
                list.appendChild(li);
            }
        }
        this.showWork = function(index){
            
        }
        this.hideWork = function(){}
    }
});