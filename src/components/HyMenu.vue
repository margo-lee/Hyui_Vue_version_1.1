<script>
import $ from "jquery";
import { props, watch, ref, onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      var stickyMenuTop = Math.floor($("header .menu").offset().top);
      var customHeight = 176 - 40;
      var _window = $(window);
      var ww = _window.outerWidth();
      var wwSmall = 768;
      // 固定版頭
      var menuFixed = () => {
        $(window).bind("load scroll resize", function(e) {
          ww = _window.outerWidth();
          if (ww >= wwSmall && $(this).scrollTop() > stickyMenuTop) {
            $(".header").addClass("fixed");
            $(".header").css("margin-top", -1 * customHeight);
          } else {
            $(".header").removeClass("fixed");
            $(".header").css("margin-top", 0);
            // $(".main").css("margin-top", 0);
          }
        });
      };
      menuFixed();
    });
    const openSideMenu = (e) => {
      const clien_Width = document.body.clientWidth;
      if (clien_Width < 768) {
        let targetItem = e.target.nextElementSibling;
        let ul = document.querySelectorAll(".hasChild > ul");
        if (targetItem === null) {
          return;
        }
        if (
          targetItem.parentElement.parentElement.parentElement.nodeName !== "LI"
        ) {
          ul.forEach(function(item) {
            item.style.display = "";
          });
        }
        if (targetItem.style.display === "") {
          targetItem.style.display = "block";
          targetItem.style.position = "relative";
          targetItem.style.left = 0;
        } else {
          targetItem.style.display = "";
        }
      }
    };
    return {
      openSideMenu,
    };
  },
};
</script>
<template>
  <!-- menu Start -->
  <nav class="menu" role="navigation" aria-label="About page">
    <ul>
      <li class="hasChild" @click="openSideMenu">
        <!-- <a href="#">第一層選單</a> -->
        <router-link to="/np_template">第一層選單</router-link>
        <ul>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
        </ul>
      </li>
      <li><router-link to="/lp_template">第一層選單</router-link></li>
      <!-- <li><a href="http://www.google.com">第一層有連結</a></li> -->
      <li class="hasChild" @click="openSideMenu">
        <router-link to="/lp_table_template">第一層選單</router-link>
        <!-- <a href="http://www.google.com">第一層有連結</a> -->
        <ul>
          <li><a href="http://www.google.com">第二層有連結</a></li>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
        </ul>
      </li>
      <li class="hasChild" @click.stop="openSideMenu">
        <router-link to="/Qp_template">第一層選單</router-link>
        <ul>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
          <li @click.stop="openSideMenu">
            <a href="#">第二層有連結</a>
            <!-- <a href="http://www.google.com">第二層有連結</a> -->
            <ul>
              <li>
                <!-- <a href="http://www.google.com">第三層選單有下層</a> -->
                <a href="#">第三層選單有下層</a>
                <ul>
                  <li><a href="#">第四層選單</a></li>
                  <li><a href="#">第四層選單</a></li>
                </ul>
              </li>
              <li>
                <a href="http://www.google.com">第三層選單有連結</a>
              </li>
              <li><a href="#">第三層選單</a></li>
            </ul>
          </li>
          <li><a href="#">第二層選單</a></li>
        </ul>
      </li>
      <li class="hasChild" @click="openSideMenu">
        <router-link to="/lp_album_template">第一層選單</router-link>
        <!-- <a href="#">第一層選單</a> -->
        <ul>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
        </ul>
      </li>
      <li>
        <a href="#">第一層選單</a>
        <ul>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
          <li><a href="#">第二層選單</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <!-- menu End -->
</template>
<style>
.menu {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>
