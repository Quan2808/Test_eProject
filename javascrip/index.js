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
  .when("/iORA", {
    templateUrl : "../nav/iORA_1.html"
  })
  .when("/IORA/iORA/page2", {
    templateUrl : "../IORA/iORA_2.html"
  })
  .when("/IORA/iORA/page3", {
    templateUrl : "../IORA/iORA_3.html"
  })
  .when("/IORA/iORA/page4", {
    templateUrl : "../IORA/iORA_4.html"
  })
  .when("/IORA/iORA_Bottoms", {
    templateUrl : "../IORA/iORA_Bottoms.html"
  })
  .when("/IORA/iORA_KnitAndSweaters", {
    templateUrl : "../IORA/iORA_KnitAndSweaters.html"
  })
  .when("/IORA/iORA_NewArrival", {
    templateUrl : "../IORA/iORA_NewArrival.html"
  })
  .when("/IORA/iORA_Skirts", {
    templateUrl : "../IORA/iORA_Skirts.html"
  })
  .when("/IORA/iORA_Tops", {
    templateUrl : "../IORA/iORA_Tops.html"
  })
  .when("/bundledeal/2 FOR $29.90", {
    templateUrl : "../bundledeal/bundledeal1.html"
  })
  .when("/bundledeal/2 FOR $49.90", {
    templateUrl : "../bundledeal/bundledeal2.html"
  })
  .when("/Accessories/Bags", {
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
  .when("/Accessories/Shoes", {
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
  .when("/IORA/Product/Highneck Knit Tank Top", {
    templateUrl : "../IORA/Product/Highneck Knit Tank Top.html"
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

