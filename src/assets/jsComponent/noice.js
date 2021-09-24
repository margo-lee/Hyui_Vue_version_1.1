/*-----------------------------------*/
//////////// notice訊息區塊 ////////////
/*-----------------------------------*/
$(function () {
  $('[class*="notice"] a.close').click(function (e) {
    $(this).parent('[class*="notice"]').hide();
    e.preventDefault();
  });
});
