$(function(){

//トップリンク
$('#top-btn').click(function(){
  $('html,body').animate({
    'scrollTop':0
  },'slow');
});


   if (window.matchMedia( '(max-width: 480px)' ).matches) {
$(function(){

$('.scrollbtn').click(function(){
  $('.header-right li').slideUp();
  $('.header-right li').removeClass('close');
});

});
};

//メニューボタン
$('#topmenu-btn').click(function(){
  var slidemenu = $('.header-right li');
if(slidemenu.hasClass("close")){
 slidemenu.slideUp('fast');
 slidemenu.removeClass('close');
} else{
  slidemenu.slideDown('fast');
  slidemenu.addClass('close');
};

});

//ページ内リンク
var headerHight = 65;
$('.scrollbtn').click(function(){
     var href= $(this).attr("href");
       var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
     $("html, body").animate({scrollTop:position}, 500, "swing");
        return false;


   });




//headerのh1アニメ
$('h1').fadeIn(2000);


//レッスン一覧
$('.contents-item').hover(
  function(){
    $(this).find('.lesson-text').addClass('active');
  },
  function(){
    $(this).find('.lesson-text').removeClass('active');
});





});
