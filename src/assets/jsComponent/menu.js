/*-----------------------------------*/
/////// header選單 tab及 fix設定////////
/*-----------------------------------*/
$(function () {
  //   var _menu = $(".menu"),
  //     _megamenu = $(".megamenu");
  //   _menu.find("li").has("ul").addClass("hasChild");
  //   _megamenu.find("li").has("ul").addClass("hasChild");
  function menuAddClaass() {
    _menu.find("li").has("ul").addClass("hasChild");
    _megamenu.find("li").has("ul").addClass("hasChild");
  }
  menuAddClaass();
});
