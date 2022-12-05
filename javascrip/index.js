var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "../body.html"
  })
  
  .when("/findStore", {
    templateUrl : "../menu/findStore.html"
  })
  .when("/favourite", {
    templateUrl : "../menu/favourite.html"
  })
  .when("/login", {
    templateUrl : "../menu/login.html"
  })
  .when("/shoppingCard", {
    templateUrl : "../menu/shoppingCart.html"
  })
  .when("/register", {
    templateUrl : "../menu/register.html"
  })
  .when("/iora1", {
    templateUrl : "../nav/iORA_1.html"
  })
  .when("/iora2", {
    templateUrl : "../IORA/iORA_2.html"
  })
  .when("/iora3", {
    templateUrl : "../IORA/iORA_3.html"
  })
  .when("/iora4", {
    templateUrl : "../IORA/iORA_4.html"
  })
  .when("/iora5", {
    templateUrl : "../IORA/iORA_Bottoms.html"
  })
  .when("/iora6", {
    templateUrl : "../IORA/iORA_KnitAndSweaters.html"
  })
  .when("/iora7", {
    templateUrl : "../IORA/iORA_NewArrival.html"
  })
  .when("/iora8", {
    templateUrl : "../IORA/iORA_Skirts.html"
  })
  .when("/iora9", {
    templateUrl : "../IORA/iORA_Tops.html"
  })
  .when("/bundledeal1", {
    templateUrl : "../bundledeal/bundledeal1.html"
  })
  .when("/bundledeal2", {
    templateUrl : "../bundledeal/bundledeal2.html"
  })
  .when("/bags1", {
    templateUrl : "../accessories/Bags_.html"
  })
  .when("/lalu1", {
    templateUrl : "../nav/LALU_1.html"
  })
  .when("/lalu2", {
    templateUrl : "../lalu/LALU_2.html"
  })
  .when("/lalubottom", {
    templateUrl : "../lalu/laluBottoms.html"
  })
  .when("/lalunewarri", {
    templateUrl : "../lalu/laluNewArrivals.html"
  })
  .when("/laluskirts", {
    templateUrl : "../lalu/laluSkirts.html"
  })
  .when("/lalutops", {
    templateUrl : "../lalu/laluTops.html"
  })
  .when("/shoe1", {
    templateUrl : "../accessories/Shoes_.html"
  })
  .when("/cookies", {
    templateUrl : "../footer/cookies-policy.html"
  })
  .when("/privacy", {
    templateUrl : "../footer/privacy-policy.html"
  })
  .when("/terms", {
    templateUrl : "../footer/terms-of-service.html"
  })
  .when("/Accessories", {
    templateUrl : "../nav/Accessories_.html"
  })
  .when("/onlineexclusive", {
    templateUrl : "../nav/onlineexclusive.html"
  })
  .when("/sale", {
    templateUrl : "../nav/sale.html"
  })
  .when("/AboutUs", {
    templateUrl : "../footer/nav/AboutUs.html"
  })
  .when("/campaigns", {
    templateUrl : "../footer/nav/campaigns.html"
  })
  .when("/ContactUs", {
    templateUrl : "../footer/nav/ContactUs.html"
  })
  .when("/methods-cost", {
    templateUrl : "../footer/nav/methods-cost.html"
  })
  .when("/returns-exchange", {
    templateUrl : "../footer/nav/returns-exchange.html"
  })
  .when("/Blog_1", {
    templateUrl : "../blog/Blog_1.html"
  })
  .when("/Blog_2", {
    templateUrl : "../blog/Blog_2.html"
  })

  
})
   // kéo xuống khoảng cách 500px thì xuất hiện nút Top-up
   var offset = 300;
   // thời gian di trượt 0.75s ( 1000 = 1s )
   var duration = 150;
   $(function(){
   $(window).scroll(function () {
   if ($(this).scrollTop() > offset)
   $('#top-up').fadeIn(duration);
   else
   $('#top-up').fadeOut(duration);
   });
   $('#top-up').click(function () {
   $('body,html').animate({scrollTop: 0}, duration);
   });
   });
   $(function(){

   $('a').click(function () {
   $('body,html').animate({scrollTop: 0}, duration);
   });
   });

