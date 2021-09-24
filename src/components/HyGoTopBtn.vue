<script>
import $ from "jquery";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      /*---------------------------------- -*/
      ///////////////置頂go to top////////////
      /*-----------------------------------*/
      $(window).bind("scroll", function() {
        if ($(this).scrollTop() > 200) {
          $(".scrollToTop").fadeIn();
        } else {
          $(".scrollToTop").fadeOut();
        }
      });
      /*-----------------------------------*/
      /////click event to scroll to top//////
      /*-----------------------------------*/
      $(".scrollToTop").click(function(e) {
        $("html, body").animate({ scrollTop: 0 }, 400);
        $("a.goCenter").focus(); //加入這行
        e.preventDefault();
      });
      $(".scrollToTop").keydown(function(e) {
        _body.find("a.goCenter").focus();
        e.preventDefault();
      });
    });
  },
};
</script>
<template>
  <a href="javascript:;" class="scrollToTop">回頁首</a>
</template>

<style></style>
