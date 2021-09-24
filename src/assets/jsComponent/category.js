$(function () {
  /*-----------------------------------*/
  /////////// category active  //////////
  /*-----------------------------------*/
  $(".category")
    .find("a")
    .off()
    .click(function (event) {
      $(this).parent("li").siblings().find("a").removeClass("active");
      $(this).addClass("active");
    });
});
