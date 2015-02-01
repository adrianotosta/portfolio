var works = angular.module("worksList", []);

works.service("worksListService", function(){
    this.workList = [
        {
            "id": 0,
            "title": "website",
            "description": "This website was my first international project. It had been a web gallery of a Brazilian photographer who had lived in Barcelona.",
            "client": "Petala Os",
            "duty": "wireframe, html, css, jquery",
            "thumbnail": "mini_work_0.jpg",
            "picture": "work_0.jpg"
        },
        {
            "id": 1,
            "title": "website",
            "description": "This project has been a donation to philantropic institution called Seicho-No-Ie, in Brazil.\r\n",
            "client": "Seicho-No-Ie",
            "duty": "wireframe, layout",
            "thumbnail": "mini_work_1.jpg",
            "picture": "work_1.jpg"
        },
        {
            "id": 2,
            "title": "branding",
            "description": "This was a university project. I and my friends developed a new brand to CEDECA, it is philantropic institution which helps raped childrens.",
            "client": "CEDECA",
            "duty": "branding",
            "thumbnail": "mini_work_2.jpg",
            "picture": "work_2.png"
        },
        {
            "id": 3,
            "title": "website",
            "description": "This is template for martial arts dojo.",
            "client": "",
            "duty": "wireframe, layout",
            "thumbnail": "mini_work_3.jpg",
            "picture": "work_3.jpg"
        },
        {
            "id": 4,
            "title": "website",
            "description": "This is a template for a automotive store",
            "client": "",
            "duty": "wireframe, layout",
            "thumbnail": "mini_work_4.jpg",
            "picture": "work_4.jpg"
        },
        {
            "id": 5,
            "title": "website",
            "description": "This is a template for software store",
            "client": "",
            "duty": "wireframe, layout",
            "thumbnail": "mini_work_5.jpg",
            "picture": "work_5.jpg"
        },
        {
            "id": 6,
            "title": "website",
            "description": "This template was created for a bride magazine. ",
            "client": "",
            "duty": "wierframe, layout",
            "thumbnail": "mini_work_6.jpg",
            "picture": "work_6.jpg"
        },
        {
            "id": 7,
            "title": "website",
            "description": "This website was created for a company which sells and rents equipaments for civil construction industry.",
            "client": "Trajetto",
            "duty": "wireframe, layout, html, css, jquery",
            "thumbnail": "mini_work_7.jpg",
            "picture": "work_7.jpg"
        }
//        {
//            "id": 8,
//            "title": "brand",
//            "description": "I was responsible for creating a re-brand for iP3. This job included its products too",
//            "client": "iP3",
//            "duty": "brand",
//            "thumbnail": "mini_work_8.jpg",
//            "picture": "work_8.jpg",
//            "status": "hidden"
//        },
//        {
//            "id": 9,
//            "title": "newsletter",
//            "description": "This is a newsletter which invited all employee of iP3 to send a new ideia for a new version of Neo Cobran\u00e7a",
//            "client": "iP3",
//            "duty": "layout",
//            "thumbnail": "mini_work_9.jpg",
//            "picture": "work_9.jpg",
//            "status": "hidden"
//        },
//        {
//            "id": 10,
//            "title": "newsletter",
//            "description": "A newsletter invited all employee of iP3 for a Sao Joao`s party ",
//            "client": "iP3",
//            "duty": "layout",
//            "thumbnail": "mini_work_10.jpg",
//            "picture": "work_10.jpg",
//            "status": "hidden"
//        },
//        {
//            "id": 11,
//            "title": "signal",
//            "description": "A signal put in all bathroom warning all employee about consumption of water",
//            "client": "iP3",
//            "duty": "layout",
//            "thumbnail": "mini_work_11.jpg",
//            "picture": "work_11.jpg",
//            "status": "hidden"
//        }
    ];
    
    this.showWorkDetail = function(){
        var workDetail = document.getElementsByClassName("workDetail");
        workDetail[0].classList.toggle("ng-hide");
        workDetail[0].classList.toggle("bounceIn");
    };
});