/*-----------------------------------*/
//////////// Accordion設定 ////////////
/*-----------------------------------*/
$(function () {
  $(".accordion").each(function () {
    $(this).find(".accordion-content").hide();
    var _accordionItem = $(this).children("ul").children("li").children("a");
    _accordionItem.each(function () {
      function accordion(e) {
        $(this).parent("li").siblings().children("a").removeClass("active");
        $(this).toggleClass("active");
        $(this)
          .parent("li")
          .siblings()
          .children(".accordion-content")
          .slideUp();
        $(this).next(".accordion-content").slideToggle();
        e.preventDefault();
      }
      $(this).click(accordion);
      $(this).keyup(accordion);
    });
  });
});
