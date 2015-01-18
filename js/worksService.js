var works = angular.module("worksList", []);

works.service("worksListService", function(){
    this.workList = [
        {
            "name": "title",
            "description": "text"
        }
    ];
});