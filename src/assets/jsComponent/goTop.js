/*-----------------------------------*/
///////////////置頂go to top////////////
/*-----------------------------------*/
$(function () {
  $(window).bind("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
  /*-----------------------------------*/
  /////click event to scroll to top//////
  /*-----------------------------------*/
  $(".scrollToTop").click(function (e) {
    $("html, body").animate({ scrollTop: 0 }, 400, "easeOutExpo");
    $("a.goCenter").focus(); //加入這行
    e.preventDefault();
  });
  $(".scrollToTop").keydown(function (e) {
    _body.find("a.goCenter").focus();
    e.preventDefault();
  });
});
