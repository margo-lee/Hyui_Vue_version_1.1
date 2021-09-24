$(function () {
  /*--------------------------------------------------------*/
  /////設定img 在IE9+ SAFARI FIREFOX CHROME 可以object-fit/////
  /*--------------------------------------------------------*/
  var userAgent, ieReg, ie;
  userAgent = window.navigator.userAgent;
  ieReg = /msie|Trident.*rv[ :]*11\./gi;
  ie = ieReg.test(userAgent);
  if (ie) {
    $(".img-container").each(function () {
      var imgUrl = $(this).find("img").attr("data-src");
      var $container = $(this);
      $container.has(".none").addClass("ie-object-none");
      $container.has(".none").css("backgroundImage", "url(" + imgUrl + ")");
      $container.has(".cover").addClass("ie-object-cover");
      $container.has(".cover").css("backgroundImage", "url(" + imgUrl + ")");
      $container.has(".fill").addClass("ie-object-fill");
      $container.has(".fill").css("backgroundImage", "url(" + imgUrl + ")");
      $container.has(".contain").addClass("ie-object-contain");
      $container.has(".contain").css("backgroundImage", "url(" + imgUrl + ")");
    });
  }
});
