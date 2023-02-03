define(["skillsList"], function(skills){
    return function Skill(){
        var canvas = document.getElementById("skills").getContext("2d");
        
        this.createChart = function(){
            for (i in skills){
                this.createOutLine(i);
                this.legend(i);
                this.createLevel(i);
            }
        }
        
        this.percentage = function(e){
            return ((e / 100) * 144) * -1;
        }
        
        this.positionX = function(p){
            return (p * 50) + (10 * p);
        }
        
        this.legend = function(index){
            canvas.font      = "9pt Helvetica";
            canvas.textAlign = "center";
            canvas.fillStyle = "#fff";
            canvas.fillText(skills[index].name, ((i * 60) + 30), 180);
        }
        
        this.createOutLine = function(e){
            canvas.strokeStyle = "#2CC990";
            canvas.strokeRect(this.positionX(e), 150, 50, -144);
        }

        this.createLevel = function(i){
            canvas.fillStyle = "#2CC990";
            canvas.fillRect(this.positionX(i), 150, 50, this.percentage(skills[i].rank));
        }
    };
    
});