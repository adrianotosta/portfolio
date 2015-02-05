(function(){
    require.config({
        baseUrl: "js",
        paths: {
            "jquery": "vendor/jquery-2.1.1.min",
            "workList": "worksService"
        }
    });

    require([], function(){
    });
}());