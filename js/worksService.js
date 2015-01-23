var works = angular.module("worksList", []);

works.service("worksListService", function(){
    this.workList = [
        {
            "id": 0,
            "title": "title 0",
            "client": "client 0",
            "description": "text 0",
            "role": "role 0",
            "alt": "0eee",
            "image": "work_0"
        },
        {
            "id": 1,
            "name": "title 1",
            "description": "text 1",
            "alt": "1"
        },
        {
            "id": 2,
            "name": "title 2",
            "description": "text 2",
            "alt": "2"
        },
        {
            "id": 3,
            "name": "title 3",
            "description": "text 3",
            "thumbnail": "3"
        }
    ];
    
    this.showWorkDetail = function(){
        var workDetail = document.getElementsByClassName("workDetail");
        workDetail[0].classList.toggle("ng-hide");
    };
});