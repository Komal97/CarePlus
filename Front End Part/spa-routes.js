app.config(function($routeProvider,$locationProvider,HOME,ITEMLIST,CONTACTUS,CHECKOUT){
    $locationProvider.hashPrefix('');
    $routeProvider.when(HOME,{
        templateUrl:'views/home.html'
    }).when(ITEMLIST,{
        templateUrl:'views/itemlist.html',
    }).when(CONTACTUS,{
        templateUrl:'views/contactus.html',
    }).when(CHECKOUT,{
        templateUrl:'views/checkout.html',
    }).otherwise({template:'Some Wrong URI U Type'});
});