/*-----------------------------------*/
/////////////fatfooter開關/////////////
/*-----------------------------------*/
$(function () {
  $(".btn-fatfooter").click(function (e) {
    $(this)
      .parent(".container")
      .find("nav>ul>li>ul")
      .stop(true, true)
      .slideToggle(function () {
        if ($(this).is(":visible")) {
          $(".btn-fatfooter").html("收合/CLOSE");
          $(".btn-fatfooter").attr("name", "收合選單/CLOSE");
        } else {
          $(".btn-fatfooter").html("展開/OPEN");
          $(".btn-fatfooter").attr("name", "展開選單/OPEN");
        }
      });
    $(this).stop(true, true).toggleClass("close");
  });
});
