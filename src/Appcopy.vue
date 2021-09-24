<script>
import $ from "jquery";
import HyHeader from "@/components/HyHeader.vue";
import HyFooter from "@/components/HyFooter.vue";
import HyFatfooter from "@/components/HyFatfooter.vue";
import HyGoTopBtn from "@/components/HyGoTopBtn.vue";
import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    HyHeader,
    HyFatfooter,
    HyFooter,
    HyGoTopBtn,
  },
  setup() {
    onMounted(() => {
      $(function() {
        document.createElement("picture");
        /*-----------------------------------*/
        ///////////////// 變數 ////////////////
        /*-----------------------------------*/
        var _window = $(window),
          ww = _window.outerWidth(),
          wh = _window.height(),
          _body = $("body"),
          wwNormal = 1400,
          wwMedium = 992,
          wwSmall = 768,
          wwxs = 576;

        /*-----------------------------------*/
        /////// header選單 tab及 fix設定////////
        /*-----------------------------------*/
        var _menu = $(".menu"),
          _megamenu = $(".megamenu");
        _menu
          .find("li")
          .has("ul")
          .addClass("hasChild");
        _megamenu
          .find("li")
          .has("ul")
          .addClass("hasChild");
        var liHasChild = _menu.find("li.hasChild");
        var liHasChild2 = _megamenu.children("ul").children("li.hasChild");
        /*-----------------------------------*/
        ////////////// 行動版選單切換////////////
        /*-----------------------------------*/
        _body.prepend(
          '<aside class="sidebar"><div class="m_area"><button type="button" class="sidebarClose">關閉</button></div><div class="menu_overlay"></div></aside>'
        );
        $("header .container").prepend(
          '<button type="button" class="sidebarCtrl">側欄選單</button><button type="button" class="searchCtrl">查詢</button>'
        );
        var menu_status = false,
          _sidebar = $(".sidebar"),
          _search = $(".search"),
          _nav = $(".navigation"),
          _sidebarClose = $(".sidebarClose"),
          _sidebarCtrl = $(".sidebarCtrl"),
          _overlay = $(".menu_overlay"),
          _mArea = $(".m_area");
        console.log(_mArea);
        _sidebarCtrl.append("<span></span><span></span><span></span>");
        var search_mode = false;
        // 打開選單 function
        function showSidebar() {
          _sidebar.show();
          _mArea.show();
          _mArea.animate({ "margin-left": 0 }, 400);
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

            function() {
              _sidebar.fadeOut(200);
              _mArea.hide();
            }
          );
          _body.removeClass("noscroll");
          _overlay.fadeOut();
          liHasChild.children("ul").hide();
        }
        // 打開選單動作
        _sidebarCtrl.click(function(e) {
          showSidebar();
          e.preventDefault();
        });
        // 關閉動作
        _overlay
          .add(_sidebarClose)
          .off()
          .click(function() {
            hideSidebar();
          });
        _overlay.off("mouseenter");
        // 無障礙tab設定
        // menu
        liHasChild.children("a").keyup(function() {
          $(this)
            .siblings("ul")
            .fadeIn();
          $(this)
            .parent("li")
            .siblings()
            .focus(function() {
              $(this).hide();
            });
        });
        _menu.find("li").keyup(function() {
          $(this)
            .siblings()
            .children("ul")
            .hide();
        });
        _menu.find("li:last>a").focusout(function() {
          _menu.find("li ul").hide();
        });
        // megamenu
        liHasChild2.children("a").keyup(function() {
          $(this)
            .siblings("ul")
            .fadeIn();
          $(this)
            .siblings("ul")
            .find("ul")
            .fadeIn();
          $(this)
            .parent("li")
            .siblings()
            .focus(function() {
              $(this).hide();
            });
        });
        _megamenu
          .children("ul")
          .children("li")
          .keyup(function() {
            $(this)
              .siblings()
              .children("ul")
              .hide();
          });
        _megamenu.find("li:last>a").focusout(function() {
          _menu.find("li ul").hide();
        });
        // 先複製過去
        _nav.clone().prependTo(_mArea);
        _menu.clone().prependTo(_mArea);
        _megamenu.clone().prependTo(_mArea);
        _search
          .clone()
          .prependTo(_body)
          .addClass("m_search");
        var liHasChild_level1 = $("aside .menu ul").children("li.hasChild"),
          liHasChild_level2 = $("aside .menu ul ul").children("li.hasChild"),
          liHasChild_level3 = $("aside .menu ul ul ul").children("li.hasChild"),
          subMenuWidth = liHasChild
            .first()
            .children("ul")
            .outerWidth();
        // megamenu
        var liHasChild2_level1 = $("aside .megamenu ul").children(
            "li.hasChild"
          ),
          liHasChild2_level2 = $("aside .megamenu ul ul").children(
            "li.hasChild"
          ),
          liHasChild2_level3 = $("aside .megamenu ul ul ul").children(
            "li.hasChild"
          ),
          subMenuWidth2 = liHasChild2
            .first()
            .children("ul")
            .outerWidth();
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
              mouseenter: function() {
                $(this)
                  .children("ul")
                  .stop(true, true)
                  .slideDown("600");
              },
              mouseleave: function() {
                $(this)
                  .parent()
                  .siblings("ul")
                  .hide();
                $(this)
                  .children("ul")
                  .stop(true, true)
                  .slideUp("600");
              },
            });
            // 副選單點出
            liHasChild.off().on("mouseenter,mouseleave");
            liHasChild.on("touchstart", function() {
              $(this).off("mouseenter,mouseleave");
            });
            // 第一層選單
            liHasChild_level1.off().on("click", function(e) {
              $(this)
                .siblings("li")
                .find("ul")
                .stop(true, true)
                .slideUp("600");
              $(this)
                .children("ul")
                .stop(true, true)
                .slideDown("600");
            });
            // 第二層選單
            liHasChild_level2.off().on("click", function(e) {
              $(this)
                .siblings("li")
                .children("ul")
                .stop(true, true)
                .slideUp("600");
              $(this)
                .children("ul")
                .stop(true, true)
                .slideDown("600");
            });
            // 第三層選單
            liHasChild_level3.off().on("click", function(e) {
              e.preventDefault();
            });
            //手機版第第一層點了不會進入內頁，拿掉第一層的連結無作用
            $(".sidebar .menu .hasChild")
              .children("a")
              .off()
              .on("click", function(e) {
                e.preventDefault();
              });
            // megamenu
            liHasChild2_level1.on({
              mouseenter: function() {
                $(this)
                  .children("ul")
                  .stop(true, true)
                  .slideDown("600");
              },
              mouseleave: function() {
                $(this)
                  .parent()
                  .siblings("ul")
                  .hide();
                $(this)
                  .children("ul")
                  .stop(true, true)
                  .slideUp("600");
              },
            });
            // 副選單點出
            liHasChild2.off().on("mouseenter,mouseleave");
            liHasChild2.on("touchstart", function() {
              $(this).off("mouseenter,mouseleave");
            });
            // 第一層選單
            liHasChild2_level1.off().on("click", function(e) {
              $(this)
                .siblings("li")
                .find("ul")
                .stop(true, true)
                .slideUp("600");
              $(this)
                .children("ul")
                .stop(true, true)
                .slideDown("600");
            });
            // 第二層選單
            liHasChild2_level2.off().on("click", function(e) {
              $(this)
                .siblings("li")
                .children("ul")
                .stop(true, true)
                .slideUp("600");
              $(this)
                .children("ul")
                .stop(true, true)
                .slideDown("600");
            });
            // 第三層選單
            liHasChild2_level3.off().on("click", function(e) {
              e.preventDefault();
            });
            //手機版第第一層點了不會進入內頁，拿掉第一層的連結無作用
            $(".sidebar .megamenu .hasChild")
              .children("a")
              .off()
              .on("click", function(e) {
                e.preventDefault();
              });

            // _body.off("touchmove");
            // $(".m_search").hide();
            // $(".language")
            //   .find("ul")
            //   .hide();
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
            // $(".language")
            //   .find("ul")
            //   .hide();
            // 副選單滑出
            liHasChild.on({
              mouseenter: function() {
                $(this)
                  .children("ul")
                  .stop(true, false)
                  .fadeIn();
              },
              mouseleave: function() {
                $(this)
                  .parent()
                  .siblings("ul")
                  .hide();
                $(this)
                  .children("ul")
                  .stop(true, false)
                  .fadeOut();
              },
            });
            liHasChild.off("click");
            // megamenu
            // 副選單滑出
            liHasChild2.on({
              mouseenter: function() {
                $(this)
                  .children("ul")
                  .stop(true, false)
                  .fadeIn();
              },
              mouseleave: function() {
                $(this)
                  .parent()
                  .siblings("ul")
                  .hide();
                $(this)
                  .children("ul")
                  .stop(true, false)
                  .fadeOut();
              },
            });
            liHasChild2.off("click");
            $(".megamenu")
              .children("ul")
              .children("li")
              .children("ul")
              .hide();
            // 傳統menu
            if (_menu.lenght > 0) {
              liHasChild.on({
                mouseenter: function() {
                  $(this)
                    .children("ul")
                    .stop(true, false)
                    .fadeIn();
                },
                mouseleave: function() {
                  $(this)
                    .parent()
                    .siblings("ul")
                    .hide();
                  $(this)
                    .children("ul")
                    .stop(true, false)
                    .fadeOut();
                },
              });
            }
            // megamenu
            if (_megamenu.lenght > 0) {
              liHasChild2.on({
                mouseenter: function() {
                  $(this)
                    .children("ul")
                    .stop(true, false)
                    .fadeIn();
                },
                mouseleave: function() {
                  $(this)
                    .parent()
                    .siblings("ul")
                    .hide();
                  $(this)
                    .children("ul")
                    .stop(true, false)
                    .fadeOut();
                },
              });
            }
            // 如果點在外面
            $(document).on("touchend click", function(e) {
              var target = e.target;
              if (!$(target).is(".menu li a")) {
                $(".menu")
                  .find("li ul")
                  .hide();
              }
            });
          }
        }
        //設定resize 計時器
        var resizeTimer;
        _window.bind("load resize", function(event) {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {
            // search_mode = true;
            mobileMenu();
          }, 50);
        });
        mobileMenu();
        // 行動版查詢
        var _searchCtrl = $(".searchCtrl");
        $(".m_search").hide();
        _searchCtrl.off().on("click", function(e) {
          if (!search_mode) {
            $(".m_search")
              .stop(true, false)
              .slideDown("400");
            _window.off("resize");
            $(".m_search")
              .find('input[type="text"]')
              .focus();
            search_mode = true;
          } else {
            $(".m_search").hide();
            search_mode = false;
          }
        });
        // 如果點在外面
        $(".main")
          .off()
          .on("click touchend", function(e) {
            $(".m_search").hide();
            search_mode = false;
          });
        // 固定版頭
        var headerHeight = Math.floor($(".header").outerHeight(true)),
          customHeight = 176 - 40; // header高度 - menu高度，每個專案不同，請另外填寫。
        if ($("header .menu").length > 0) {
          var stickyMenuTop = Math.floor($("header .menu").offset().top);

          headerHeight = Math.floor($(".header").outerHeight(true));
          var menuH = Math.floor(_menu.outerHeight(true));
          $(window).bind("load scroll resize", function(e) {
            ww = _window.outerWidth();
            if (ww >= wwSmall && $(this).scrollTop() > stickyMenuTop) {
              $(".header").addClass("fixed");
              $(".header").css("margin-top", -1 * customHeight);
              // $('.main').css('margin-top', headerHeight);
              // $('.main').css('margin-top', 0);
            } else {
              $(".header").removeClass("fixed");
              $(".header").css("margin-top", 0);
              $(".main").css("margin-top", 0);
            }
          });
        }
        if ($("header .megamenu").length > 0) {
          var stickyMenuTop2 = Math.floor($("header .megamenu").offset().top);
          headerHeight = Math.floor($(".header").outerHeight(true));
          var megamenuH = Math.floor(_megamenu.outerHeight(true));
          $(window).bind("load scroll resize", function(e) {
            ww = _window.outerWidth();
            if (ww >= wwSmall && $(this).scrollTop() > stickyMenuTop2) {
              $(".header").addClass("fixed");
              $(".header").css("margin-top", -1 * customHeight);
            } else {
              $(".header").removeClass("fixed");
              $(".header").css("margin-top", 0);
              $(".main").css("margin-top", 0);
            }
          });
        }
        /*-----------------------------------*/
        //////// 語言模組 無障礙遊走設定  ////////
        /*-----------------------------------*/
        // $(".language")
        //   .find("ul")
        //   .hide();
        // var openLang = $(".language").children("a");
        // openLang.off().click(function(e) {
        //   $(this)
        //     .next("ul")
        //     .stop(true, true)
        //     .slideToggle();
        //   e.preventDefault();
        // });
        // openLang.keyup(function() {
        //   $(this)
        //     .next("ul")
        //     .stop(true, true)
        //     .slideDown();
        // });
        // $(".language")
        //   .find("ul li:last>a")
        //   .focusout(function() {
        //     $(".language")
        //       .find("ul")
        //       .hide();
        //   });
        // $(document).on("touchend click", function(e) {
        //   var target = e.target;
        //   if (!$(target).is(".language a")) {
        //       $(".language")
        //         .find("ul")
        //         .hide();
        //   }
        // });
      });
    });
  },
};
</script>

<template>
  <a class="goCenter" href="#center" tabindex="1">按Enter到主內容區</a>
  <!-- wrapper Start -->
  <div class="wrapper">
    <HyHeader />
    <router-view />
    <HyFatfooter />
    <HyFooter />
  </div>
  <HyGoTopBtn />
</template>

<style lang="scss">
// @import "~@/assets/sass/hyui.scss";
</style>
