app
    .directive('pmapTable', function(){
        return {
            restrict:'AE',
            templateUrl:'../templates/table.html',
            replace:true
        }
    })

    .directive('adminNav', function(){
        return{
            restrict:'AE',
            templateUrl:'../templates/admin-nav.html',
            replace:true
        }
    })
    .directive('adminSideBar', function(){
        return{
            restrict:'AE',
            templateUrl:'../templates/admin-side-bar.html',
            replace:true
        }
    })
    .directive('adminTitle', function(){
        return{
            restrict:'AE',
            templateUrl:'../templates/admin-panel-title.html',
            replace:true
        }
    })
    .directive('adminSideMenu', function(){
        return{
            restrict:'AE',
            templateUrl:'../templates/admin-side-menu.html',
            replace:true
        }
    })
    .directive('bigCard', function(){
        return{
            restrict:'AE',
            templateUrl:'../templates/card-lg.html',
            replace:true
        }
    });