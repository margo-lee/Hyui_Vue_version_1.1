$(function () {
  /*-----------------------------------*/
  /////////// 無障礙快捷鍵盤組合  //////////
  /*-----------------------------------*/
  $(document).on("keydown", function (e) {
    // alt+S 查詢
    if (e.altKey && e.keyCode == 83) {
      $("html, body").animate({ scrollTop: 0 }, 200, "easeOutExpo");
      $(".search").find('input[type="text"]').focus();
    }
    // alt+U header
    if (e.altKey && e.keyCode == 85) {
      $("html, body").animate({ scrollTop: 0 }, 200, "easeOutExpo");
      $("header").find(".accesskey").focus();
    }
    // alt+C 主要內容區
    if (e.altKey && e.keyCode == 67) {
      $("html, body")
        .stop(true, true)
        .animate(
          { scrollTop: $(".main").find(".accesskey").offset().top - 70 },
          800,
          "easeOutExpo"
        );
      $(".main").find(".accesskey").focus();
    }
    // alt+B footer
    if (e.altKey && e.keyCode == 90) {
      $("html, body")
        .stop(true, true)
        .animate(
          { scrollTop: $("footer").find(".accesskey").offset().top },
          800,
          "easeOutExpo"
        );
      $("footer").find(".accesskey").focus();
    }
  });
  //無障礙切換slick箭頭語系
  if ($("html")[0].hasAttribute("labg")) {
    var weblang = $("html").attr("lang");
    if (weblang.substring(0, 2) == "zh") {
      $(".slick-prev").attr("title", "上一筆");
      $(".slick-next").attr("title", "下一筆");
    } else if (weblang.substring(0, 2) !== "zh") {
      $(".slick-prev").attr("title", "previous");
      $(".slick-next").attr("title", "next");
    }
  }
  // 無障礙錨點切換語系，更改accesskey的title名稱
  var weblang = $("html").attr("lang");
  if (weblang.substring(0, 2) == "zh") {
    $("header").find(".accesskey").attr("title", "上方功能區塊");
    $(".main").find(".accesskey").attr("title", "中央內容區塊");
    $("footer").find(".accesskey").attr("title", "下方功能區塊");
    $(".search").find(".accesskey").attr("title", "關鍵字搜尋：文章關鍵字搜尋");
  } else if (weblang.substring(0, 2) !== "zh") {
    $("header").find(".accesskey").attr("title", "header");
    $(".main").find(".accesskey").attr("title", "content");
    $("footer").find(".accesskey").attr("title", "footer");
    $(".search").find(".accesskey").attr("title", "search");
  }
  /*------------------------------------*/
  /////gotoCenter on focus跳到 content/////
  /*------------------------------------*/
  $("a.goCenter").keydown(function (e) {
    if (e.which == 13) {
      $("#aC").focus();
      $("html, body")
        .stop(true, true)
        .animate(
          { scrollTop: $(".main").find(".accesskey").offset().top },
          800,
          "easeOutExpo"
        );
    }
  });
  /*-----------------------------------*/
  //////// 語言模組 無障礙遊走設定  ////////
  /*-----------------------------------*/
  $(".language").find("ul").hide();
  var openLang = $(".language").children("a");
  openLang.off().click(function (e) {
    $(this).next("ul").stop(true, true).slideToggle();
    e.preventDefault();
  });
  openLang.keyup(function () {
    $(this).next("ul").stop(true, true).slideDown();
  });
  $(".language")
    .find("ul li:last>a")
    .focusout(function () {
      $(".language").find("ul").hide();
    });
  $(document).on("touchend click", function (e) {
    var target = e.target;
    if (!$(target).is(".language a")) {
      $(".language").find("ul").hide();
    }
  });
});
