$(function () {
  /*-----------------------------------*/
  /////// header選單 tab及 fix設定////////
  /*-----------------------------------*/
  var _menu = $(".menu");
  var _megamenu = $(".megamenu");
  var liHasChild = _menu.find("li.hasChild");
  var liHasChild2 = _megamenu.children("ul").children("li.hasChild");

  var headerHeight = Math.floor($(".header").outerHeight(true));
  var menuKind = $("header nav").last();
  var customHeight = headerHeight - menuKind.outerHeight(true);

  //console.log(menuKind.attr("class"));

  //menuKind.find("li").has("ul").addClass("hasChild");
  _menu.find("li").has("ul").addClass("hasChild");
  _megamenu.find("li").has("ul").addClass("hasChild");

  /*-----------------------------------*/
  ////////////// 行動版選單切換////////////
  /*-----------------------------------*/
  _body.prepend(
    '<aside class="sidebar"><div class="m_area"><button type="button" class="sidebarClose">關閉</button></div><div class="menu_overlay"></div></aside>'
  );
  $("header .container").prepend(
    '<button type="button" class="sidebarCtrl">側欄選單</button><button type="button" class="searchCtrl">查詢</button>'
  );
  var menu_status = false;
  var _sidebar = $(".sidebar");
  var _search = $(".search");
  var _nav = $(".navigation");
  var _sidebarClose = $(".sidebarClose");
  var _sidebarCtrl = $(".sidebarCtrl");
  var _overlay = $(".menu_overlay");
  var _mArea = $(".m_area");
  var search_mode = false;
  var checkMenu = menuKind.attr("class");
  _sidebarCtrl.append("<span></span><span></span><span></span>");

  // 打開選單 function
  function showSidebar() {
    _sidebar.show();
    _mArea.show();
    _mArea.animate({ "margin-left": 0 }, 400, "easeOutQuint");
    _body.addClass("noscroll");
    _overlay.fadeIn();
    $(".m_search").hide();
    search_mode = false;
  }
  // 縮合選單 function
  function hideSidebar() {
    _mArea.animate(
      { "margin-left": _mArea.width() * -1 + "px" },
      500,
      "easeOutQuint",
      function () {
        _sidebar.fadeOut(200);
        _mArea.hide();
      }
    );
    _body.removeClass("noscroll");
    _overlay.fadeOut();
    liHasChild.children("ul").hide();
  }
  // 打開選單動作
  _sidebarCtrl.click(function (e) {
    e.preventDefault();
    showSidebar();
  });
  // 關閉動作
  _overlay
    .add(_sidebarClose)
    .off()
    .click(function () {
      hideSidebar();
    });

  _overlay.off("mouseenter");

  // 無障礙tab設定
  //++++++++++++++++++++++++
  // 改寫
  //++++++++++++++++++++++++
  function menuTabCheck() {
    var li_Has_Child;
    //收闔 menu 選單
    function hideMenu() {
      $(this).siblings().children("ul").hide();
    }
    //如果名稱是menu
    if (menuKind.length > 0 && checkMenu === "menu") {
      li_Has_Child = menuKind.find("li.hasChild");
      li_Has_Child.children("a").keyup(function () {
        $(this).siblings("ul").fadeIn();
        $(this)
          .parent("li")
          .siblings()
          .focus(function () {
            $(this).hide();
          });
      });
      menuKind.find("li").keyup(hideMenu);
    }
    //如果名稱是megamenu
    else if (menuKind.length > 0 && checkMenu === "megamenu") {
      li_Has_Child = menuKind.children("ul").children("li.hasChild");
      li_Has_Child.children("a").keyup(function () {
        $(this).siblings("ul").fadeIn();
        $(this).siblings("ul").find("ul").fadeIn();
        $(this)
          .parent("li")
          .siblings()
          .focus(function () {
            $(this).hide();
          });
      });
      menuKind.children("ul").children("li").keyup(hideMenu);
    }
    menuKind.find("li:last>a").focusout(function () {
      menuKind.find("li ul").hide();
    });
  }
  menuTabCheck();

  //++++++++++++++++++++++++
  //++++++++++++++++++++++++

  // menu
  // liHasChild.children("a").keyup(function () {
  //   $(this).siblings("ul").fadeIn();
  //   $(this)
  //     .parent("li")
  //     .siblings()
  //     .focus(function () {
  //       $(this).hide();
  //     });
  // });
  // _menu.find("li").keyup(function () {
  //   $(this).siblings().children("ul").hide();
  // });
  // _menu.find("li:last>a").focusout(function () {
  //   _menu.find("li ul").hide();
  // });
  // megamenu
  // liHasChild2.children("a").keyup(function () {
  //   $(this).siblings("ul").fadeIn();
  //   $(this).siblings("ul").find("ul").fadeIn();
  //   $(this)
  //     .parent("li")
  //     .siblings()
  //     .focus(function () {
  //       $(this).hide();
  //     });
  // });
  // _megamenu
  //   .children("ul")
  //   .children("li")
  //   .keyup(function () {
  //     $(this).siblings().children("ul").hide();
  //   });
  // _megamenu.find("li:last>a").focusout(function () {
  //   _menu.find("li ul").hide();
  // });

  // 先複製過去
  _nav.clone().prependTo(_mArea);
  menuKind.clone().prependTo(_mArea);
  // _menu.clone().prependTo(_mArea);
  // _megamenu.clone().prependTo(_mArea);
  _search.clone().prependTo(_body).addClass("m_search");
  // var liHasChild_level1 = $("aside .menu ul").children("li.hasChild"),
  //   liHasChild_level2 = $("aside .menu ul ul").children("li.hasChild"),
  //   liHasChild_level3 = $("aside .menu ul ul ul").children("li.hasChild"),
  //   subMenuWidth = liHasChild.first().children("ul").outerWidth();
  var liHasChild_level1 = $("aside " + "." + checkMenu + " ul").children(
    "li.hasChild"
  );

  console.log(liHasChild_level1);
  var liHasChild_level2 = $("aside " + "." + checkMenu + " ul ul").children(
    "li.hasChild"
  );
  //var liHasChild_level2 = $("aside .menu ul ul").children("li.hasChild");
  var liHasChild_level3 = $("aside .menu ul ul ul").children("li.hasChild");
  //var liHasChild_level3 = $("aside .menu ul ul ul").children("li.hasChild");
  var subMenuWidth = liHasChild.first().children("ul").outerWidth();
  // megamenu
  var liHasChild2_level1 = $("aside .megamenu ul").children("li.hasChild"),
    liHasChild2_level2 = $("aside .megamenu ul ul").children("li.hasChild"),
    liHasChild2_level3 = $("aside .megamenu ul ul ul").children("li.hasChild"),
    subMenuWidth2 = liHasChild2.first().children("ul").outerWidth();
  // 切換PC/Mobile 選單
  function mobileMenu() {
    ww = _window.outerWidth();
    if (ww < wwSmall) {
      /*-----------------------------------*/
      /////////////// 手機版設定 /////////////
      /*-----------------------------------*/
      menu_status = false;
      _sidebar.hide();
      _overlay.hide();
      _mArea.css({
        "margin-left": _mArea.width() * -1 + "px",
      });
      liHasChild_level1.on({
        mouseenter: function () {
          $(this)
            .children("ul")
            .stop(true, true)
            .slideDown("600", "easeOutQuint");
        },
        mouseleave: function () {
          $(this).parent().siblings("ul").hide();
          $(this)
            .children("ul")
            .stop(true, true)
            .slideUp("600", "easeOutQuint");
        },
      });
      // 副選單點出
      liHasChild.off().on("mouseenter,mouseleave");
      liHasChild.on("touchstart", function () {
        $(this).off("mouseenter,mouseleave");
      });
      // 第一層選單
      liHasChild_level1.off().on("click", function (e) {
        $(this)
          .siblings("li")
          .find("ul")
          .stop(true, true)
          .slideUp("600", "easeOutQuint");
        $(this)
          .children("ul")
          .stop(true, true)
          .slideDown("600", "easeOutQuint");
      });
      // 第二層選單
      liHasChild_level2.off().on("click", function (e) {
        $(this)
          .siblings("li")
          .children("ul")
          .stop(true, true)
          .slideUp("600", "easeOutQuint");
        $(this)
          .children("ul")
          .stop(true, true)
          .slideDown("600", "easeOutQuint");
      });
      // 第三層選單
      liHasChild_level3.off().on("click", function (e) {
        e.preventDefault();
      });
      //手機版第第一層點了不會進入內頁，拿掉第一層的連結無作用
      $(".sidebar .menu .hasChild")
        .children("a")
        .off()
        .on("click", function (e) {
          e.preventDefault();
        });
      // megamenu
      liHasChild2_level1.on({
        mouseenter: function () {
          $(this)
            .children("ul")
            .stop(true, true)
            .slideDown("600", "easeOutQuint");
        },
        mouseleave: function () {
          $(this).parent().siblings("ul").hide();
          $(this)
            .children("ul")
            .stop(true, true)
            .slideUp("600", "easeOutQuint");
        },
      });
      // 副選單點出
      liHasChild2.off().on("mouseenter,mouseleave");
      liHasChild2.on("touchstart", function () {
        $(this).off("mouseenter,mouseleave");
      });
      // 第一層選單
      liHasChild2_level1.off().on("click", function (e) {
        $(this)
          .siblings("li")
          .find("ul")
          .stop(true, true)
          .slideUp("600", "easeOutQuint");
        $(this)
          .children("ul")
          .stop(true, true)
          .slideDown("600", "easeOutQuint");
      });
      // 第二層選單
      liHasChild2_level2.off().on("click", function (e) {
        $(this)
          .siblings("li")
          .children("ul")
          .stop(true, true)
          .slideUp("600", "easeOutQuint");
        $(this)
          .children("ul")
          .stop(true, true)
          .slideDown("600", "easeOutQuint");
      });
      // 第三層選單
      liHasChild2_level3.off().on("click", function (e) {
        e.preventDefault();
      });
      //手機版第第一層點了不會進入內頁，拿掉第一層的連結無作用
      $(".sidebar .megamenu .hasChild")
        .children("a")
        .off()
        .on("click", function (e) {
          e.preventDefault();
        });
      //
      _body.off("touchmove");
      $(".m_search").hide();
      $(".language").find("ul").hide();
    } else {
      /*-----------------------------------*/
      /////////////// PC版設定 /////////////
      /*-----------------------------------*/
      hideSidebar();
      _body.removeClass("noscroll");
      _nav.prependTo(".header .container");
      _search.appendTo(".header .container");
      _menu.appendTo(".header .container");
      _megamenu.appendTo(".header .container");
      _search.removeClass("m_search");
      $(".m_search").hide();
      _search.show();
      search_mode = false;
      $(".language").find("ul").hide();
      // 副選單滑出
      liHasChild.on({
        mouseenter: function () {
          $(this).children("ul").stop(true, false).fadeIn();
        },
        mouseleave: function () {
          $(this).parent().siblings("ul").hide();
          $(this).children("ul").stop(true, false).fadeOut();
        },
      });
      liHasChild.off("click");
      // megamenu
      // 副選單滑出
      liHasChild2.on({
        mouseenter: function () {
          $(this).children("ul").stop(true, false).fadeIn();
        },
        mouseleave: function () {
          $(this).parent().siblings("ul").hide();
          $(this).children("ul").stop(true, false).fadeOut();
        },
      });
      liHasChild2.off("click");
      $(".megamenu").children("ul").children("li").children("ul").hide();
      // 傳統menu
      if (_menu.lenght > 0) {
        liHasChild.on({
          mouseenter: function () {
            $(this).children("ul").stop(true, false).fadeIn();
          },
          mouseleave: function () {
            $(this).parent().siblings("ul").hide();
            $(this).children("ul").stop(true, false).fadeOut();
          },
        });
      }
      // megamenu
      if (_megamenu.lenght > 0) {
        liHasChild2.on({
          mouseenter: function () {
            $(this).children("ul").stop(true, false).fadeIn();
          },
          mouseleave: function () {
            $(this).parent().siblings("ul").hide();
            $(this).children("ul").stop(true, false).fadeOut();
          },
        });
      }
      // 如果點在外面
      // $(document).on('touchend click', function(e) {
      //     var target = e.target;
      //     if (!$(target).is('.menu li a')) {
      //         $('.menu').find('li ul').hide();
      //     }
      // });
    }
  }
  //設定resize 計時器
  var resizeTimer;
  _window.bind("load resize", function (event) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      // search_mode = true;
      mobileMenu();
    }, 50);
  });
  mobileMenu();
  // 行動版查詢
  var _searchCtrl = $(".searchCtrl");
  $(".m_search").hide();
  _searchCtrl.off().on("click", function (e) {
    if (!search_mode) {
      $(".m_search").stop(true, false).slideDown("400", "easeOutQuint");
      _window.off("resize");
      // $('.m_search').find('input[type="text"]').focus();
      search_mode = true;
    } else {
      $(".m_search").hide();
      search_mode = false;
    }
  });
  // 如果點在外面
  $(".main")
    .off()
    .on("click touchend", function (e) {
      $(".m_search").hide();
      search_mode = false;
    });

  // 固定版頭
  // var headerHeight = Math.floor($(".header").outerHeight(true));
  // var menuKind = $("header nav").last();
  // var customHeight = headerHeight - menuKind.outerHeight(true);

  // 固定版頭
  //++++++++++++++++++++++++
  // 改寫
  //++++++++++++++++++++++++
  function stickyMenu(menuKind) {
    var stickyMenuTop = Math.floor(menuKind.offset().top);
    $(window).bind("load scroll resize", function (e) {
      ww = _window.outerWidth();
      if (ww >= wwSmall && $(this).scrollTop() > stickyMenuTop) {
        $(".header").addClass("fixed");
        $(".header").css("margin-top", -1 * customHeight);
      } else {
        $(".header").removeClass("fixed");
        $(".header").css("margin-top", 0);
        $(".main").css("margin-top", 0);
      }
    });
  }
  if ($("header .menu").length > 0 || $("header .megamenu").length > 0) {
    stickyMenu(menuKind);
  }
  //++++++++++++++++++++++++

  // if ($("header .menu").length > 0) {
  //   var stickyMenuTop = Math.floor($("header .menu").offset().top);
  //   // console.log(stickyMenuTop);
  //   headerHeight = Math.floor($(".header").outerHeight(true));
  //   menuH = Math.floor(_menu.outerHeight(true));
  //   $(window).bind("load scroll resize", function (e) {
  //     ww = _window.outerWidth();
  //     if (ww >= wwSmall && $(this).scrollTop() > stickyMenuTop) {
  //       $(".header").addClass("fixed");
  //       $(".header").css("margin-top", -1 * customHeight);
  //       // $('.main').css('margin-top', headerHeight);
  //       // $('.main').css('margin-top', 0);
  //     } else {
  //       $(".header").removeClass("fixed");
  //       $(".header").css("margin-top", 0);
  //       $(".main").css("margin-top", 0);
  //     }
  //   });
  // }
  // if ($("header .megamenu").length > 0) {
  //   var stickyMenuTop2 = Math.floor($("header .megamenu").offset().top);
  //   headerHeight = Math.floor($(".header").outerHeight(true));
  //   megamenuH = Math.floor(_megamenu.outerHeight(true));
  //   $(window).bind("load scroll resize", function (e) {
  //     ww = _window.outerWidth();
  //     if (ww >= wwSmall && $(this).scrollTop() > stickyMenuTop2) {
  //       $(".header").addClass("fixed");
  //       $(".header").css("margin-top", -1 * customHeight);
  //       // $('.main').css('margin-top', headerHeight);
  //       // $('.main').css('margin-top', 0);
  //     } else {
  //       $(".header").removeClass("fixed");
  //       $(".header").css("margin-top", 0);
  //       $(".main").css("margin-top", 0);
  //     }
  //   });
  // }
});
