$(function () {
  /*------------------------------------*/
  //////////分享按鈕 share dropdwon////////
  /*------------------------------------*/
  $(".function_panel .share").children("ul").hide();
  $(".function_panel .share").prepend(
    '<a href="#" class="shareButton">share分享按鈕</a>'
  );
  var _shareButton = $(".shareButton");
  _shareButton.off().click(function (e) {
    $(this).siblings("ul").stop(true, true).slideToggle();
    e.preventDefault();
  });
  _shareButton.keyup(function (event) {
    $(this).siblings("ul").stop(true, true).slideDown();
  });
  $(".function_panel .share")
    .find("li:last>a")
    .focusout(function (event) {
      $(this).parent().parent("ul").hide();
    });
  // 點外面關閉share
  $(document).on("touchend click", function (e) {
    var container = $(".function_panel .share");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".function_panel .share ul").hide();
    }
  });
});
