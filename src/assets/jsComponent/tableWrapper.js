$(function () {
  // /*------------------------------------*/
  // ///////table 加上響應式table wrapper/////
  // /*------------------------------------*/
  $("table").each(function (index, el) {
    //判斷沒有table_list
    if (
      $(this).parents(".table_list").length == 0 &&
      $(this).parents(".fix_th_table").length == 0 &&
      $(this).parent("form").length == 0
    ) {
      $(this).scroltable();
    }
  });
  // tablearrow arrow，為了設定箭頭
  $(".scroltable-nav-left").append(
    '<div class="tablearrow_left" style="display:none;"></div>'
  );
  $(".scroltable-nav-right").append(
    '<div class="tablearrow_right"  style="display:none;"></div>'
  );
  // 固定版頭
  function table_Arrow() {
    if (
      $("table").parents(".table_list").length == 0 &&
      $("table").parents(".fix_th_table").length == 0 &&
      $(this).parent("form").length == 0
    ) {
      if ($(".scroltable-wrapper").length > 0) {
        var stickyArrowTop = Math.floor($(".scroltable-wrapper").offset().top),
          thisScroll = Math.floor($(this).scrollTop());
        if (thisScroll > stickyArrowTop - 230) {
          $(".scroltable-wrapper .tablearrow_left").css("display", "block");
          $(".scroltable-wrapper .tablearrow_left").css(
            { top: thisScroll - stickyArrowTop + 220 },
            100,
            "easeOutQuint"
          );
          $(".scroltable-wrapper .tablearrow_right").css("display", "block");
          $(".scroltable-wrapper .tablearrow_right").css(
            { top: thisScroll - stickyArrowTop + 220 },
            100,
            "easeOutQuint"
          );
        } else {
          $(".scroltable-wrapper .tablearrow_left").css({
            top: "10px",
            display: "none",
          });
          $(".scroltable-wrapper .tablearrow_right").css({
            top: "10px",
            display: "none",
          });
        }
      }
    }
  }
  $(window).scroll(function (event) {
    table_Arrow();
  });
  var scrollTimer;
  _window.scroll(function () {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
      table_Arrow();
    }, 50);
  });
  // /*------------------------------------*/
  // //////////table 加上 data-title//////////
  // /*------------------------------------*/
  function rwdTable() {
    $(".table_list")
      .find("table")
      .each(function () {
        var $row = $(this).find("tr");
        rowCount = $row.length;
        for (var n = 1; n <= rowCount; n++) {
          $(this)
            .find("th")
            .each(function (index) {
              var thText = $(this).text();
              $row.eq(n).find("td").eq(index).attr("data-title", thText);
            });
        }
      });
  }
  rwdTable();
});
