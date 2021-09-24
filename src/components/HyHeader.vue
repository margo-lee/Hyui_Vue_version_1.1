<script>
import $ from "jquery";
import { onMounted, ref, nextTick, watch } from "@vue/runtime-core";
import HyLanguage from "@/components/HyLanguage.vue";
import HyFontSize from "@/components/HyFontSize.vue";
import HySearch from "@/components/HySearch.vue";
import HyNavigation from "@/components/HyNavigation.vue";
import HyMenu from "@/components/HyMenu.vue";
export default {
  components: {
    HyLanguage,
    HyFontSize,
    HySearch,
    HyNavigation,
    HyMenu,
  },
  setup() {
    const menuBtn = ref(false);
    const m_search = ref(false);
    const m_menu = ref(false);
    const sidebarMenuOpen = ref(false);
    let menuItemOpen = null;
    let menuItemHoverOpen = null;

    const menuPhoneBtnFn = () => {
      let clientWidth = document.documentElement.clientWidth;
      if (clientWidth < 768) {
        menuBtn.value = true;
        m_menu.value = true;
      } else {
        menuBtn.value = false;
        m_menu.value = false;
      }
    };
    const handleSearch = () => {
      m_search.value = !m_search.value;
    };
    const handleMeun = () => {
      sidebarMenuOpen.value = !sidebarMenuOpen.value;
    };
    watch(m_menu, () => {
      nextTick(() => {
        menuItemHoverOpen();
      });
    });
    onMounted(() => {
      menuPhoneBtnFn();
      window.addEventListener("resize", menuPhoneBtnFn);
      var stickyMenuTop = Math.floor($("header .menu").offset().top);
      var customHeight = 176 - 40;
      var _window = $(window);
      var ww = _window.outerWidth();
      var wwSmall = 768;
      var _menu = $(".menu");
      var liHasChild = _menu.find("li.hasChild");
      var liHasChild_level1 = $(".menu ul").children("li.hasChild");
      var liHasChild_level2 = $(".menu ul ul").children("li.hasChild");
      var liHasChild_level3 = $(".menu ul ul ul").children("li.hasChild");
      var _megamenu = $(".megamenu");
      var liHasChild2 = _megamenu.children("ul").children("li.hasChild");
      _menu
        .find("li")
        .has("ul")
        .addClass("hasChild");
      menuItemOpen = () => {
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
      };
      var _sidebarCtrl = $(".sidebarCtrl");
      _sidebarCtrl.click(function(e) {
        e.preventDefault();
      });
      menuItemHoverOpen = () => {
        // 副選單滑出
        liHasChild = _menu.find("li.hasChild");
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

        // if (_menu.lenght > 0) {
        //   liHasChild.on({
        //     mouseenter: function() {
        //       $(this)
        //         .children("ul")
        //         .stop(true, false)
        //         .fadeIn();
        //     },
        //     mouseleave: function() {
        //       $(this)
        //         .parent()
        //         .siblings("ul")
        //         .hide();
        //       $(this)
        //         .children("ul")
        //         .stop(true, false)
        //         .fadeOut();
        //     },
        //   });
        // }
        // megamenu
        // if (_megamenu.lenght > 0) {
        //   liHasChild2.on({
        //     mouseenter: function() {
        //       $(this)
        //         .children("ul")
        //         .stop(true, false)
        //         .fadeIn();
        //     },
        //     mouseleave: function() {
        //       $(this)
        //         .parent()
        //         .siblings("ul")
        //         .hide();
        //       $(this)
        //         .children("ul")
        //         .stop(true, false)
        //         .fadeOut();
        //     },
        //   });
        // }
      };
      // 切換PC/Mobile 選單
      function mobileMenu() {
        ww = _window.outerWidth();
        if (ww < wwSmall) {
        } else {
          menuItemHoverOpen();
        }
      }
      mobileMenu();
    });
    return {
      menuBtn,
      m_search,
      handleSearch,
      handleMeun,
      m_menu,
      sidebarMenuOpen,
      menuItemHoverOpen,
    };
  },
};
</script>
<template>
  <!-- header Start -->
  <div
    v-if="m_menu"
    class="m_area sidebar"
    :class="[{ sidebar_open: sidebarMenuOpen }]"
  >
    <HyMenu />
    <HyNavigation />
    <button type="button" class="sidebarClose" @click="handleMeun">
      關閉
    </button>
  </div>
  <div
    v-if="m_menu"
    :class="['menu_overlay', { menu_overlay_open: sidebarMenuOpen }]"
    @click="handleMeun"
  ></div>
  <header class="header">
    <transition name="slidedown">
      <HySearch v-if="m_search" class="m_search" />
    </transition>
    <div class="container">
      <a
        class="accesskey"
        href="#aU"
        id="aU"
        accesskey="U"
        title="網站標題"
        tabindex="2"
        >:::</a
      >
      <!-- navigation Start -->
      <nav class="navigation have_language" role="navigation" aria-label="Site">
        <!-- 新增div navlist -->
        <div class="navlist">
          <ul>
            <li><a href="#">回首頁</a></li>
            <li><a href="#">網站導覽</a></li>
            <li><a href="#">English</a></li>
            <li><a href="#">常見問答</a></li>
          </ul>
        </div>
        <!-- language -->
        <HyLanguage />
      </nav>
      <!-- 手機版本按鈕 -->
      <button
        v-if="menuBtn"
        @click="handleMeun"
        type="button"
        class="sidebarCtrl"
      >
        側欄選單 <span></span><span></span><span></span>
      </button>
      <button
        v-if="menuBtn"
        @click="handleSearch"
        type="button"
        class="searchCtrl"
      >
        查詢
      </button>
      <!-- navigation End -->
      <h1>
        <router-link to="/">
          <img src="~@/assets/images/logo.png" alt="網站標題" />
        </router-link>
      </h1>
      <HySearch />
      <HyMenu />
      <!-- menu End -->
    </div>
  </header>
  <!-- header End -->
</template>

<style lang="scss">
.slidedown-enter-active,
.slidedown-leave-active {
  transition: height 1s ease-out;
}

.slidedown-enter-to,
.slidedown-leave-from {
  overflow: hidden;
  max-height: 200px;
}

.slidedown-enter-from,
.slidedown-leave-to {
  overflow: hidden;
  max-height: 0;
}

//search
.search {
  transition: 0.5s all;
}

// header fix
.header.fixed {
  position: fixed;
  width: 100%;
  right: 0;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 25px;
  background: rgba(0, 0, 0, 0.75);
  z-index: 999;
  @include screen("mobile") {
    background: #fff;
  }
  .menu {
    > ul {
      > li {
        > a {
          color: #fff;
        }
      }
    }
  }
  .megamenu {
    > ul {
      > li {
        > a {
          color: #fff;
        }
      }
    }
  }
}
.sidebar .menu {
  position: relative;
}
.menu ul li ul li.hasChild ul {
  animation: showMenu 0.3s ease-out;
}
.main {
  @include screen("mobile") {
    margin-top: 60px;
    padding: 0;
  }
}
</style>
