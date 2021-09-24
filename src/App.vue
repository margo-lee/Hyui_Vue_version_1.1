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
      document.createElement("picture");
      /*-----------------------------------*/
      ///////////////// 變數 ////////////////
      /*-----------------------------------*/
      var _window = $(window);
      var ww = _window.outerWidth();
      var wwSmall = 768;

      /*-----------------------------------*/
      /////// header選單 tab及 fix設定////////
      /*-----------------------------------*/
      var _menu = $(".menu"),
        _megamenu = $(".megamenu");
      _menu
        .find("li")
        .has("ul")
        .addClass("hasChild");
      var liHasChild = _menu.find("li.hasChild");
      var liHasChild2 = _megamenu.children("ul").children("li.hasChild");
      var _sidebarCtrl = $(".sidebarCtrl");
      // 打開選單動作
      _sidebarCtrl.click(function(e) {
        e.preventDefault();
      });
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
    });
    return {};
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

<style lang="scss"></style>
