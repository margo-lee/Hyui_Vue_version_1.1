<script>
import $ from "jquery";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      /*------------------------------------*/
      //////////分享按鈕 share dropdwon////////
      /*------------------------------------*/
      $(".function_panel .share")
        .children("ul")
        .hide();
      $(".function_panel .share").prepend(
        '<a href="#" class="shareButton">share分享按鈕</a>'
      );
      var _shareButton = $(".shareButton");
      _shareButton.off().click(function(e) {
        $(this)
          .siblings("ul")
          .stop(true, true)
          .slideToggle();
        e.preventDefault();
      });
      _shareButton.keyup(function(event) {
        $(this)
          .siblings("ul")
          .stop(true, true)
          .slideDown();
      });
      $(".function_panel .share")
        .find("li:last>a")
        .focusout(function(event) {
          $(this)
            .parent()
            .parent("ul")
            .hide();
        });
      // 點外面關閉share
      $(document).on("touchend click", function(e) {
        var container = $(".function_panel .share");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          $(".function_panel .share ul").hide();
        }
      });
    });
  },
};
</script>
<template>
  <div class="share">
    <ul>
      <li>
        <a href="#"
          ><img src="~@/assets/images/basic/icon_facebook.svg" alt="facebook"
        /></a>
      </li>
      <li>
        <a href="#"
          ><img src="~@/assets/images/basic/icon_twitter.svg" alt="twitter"
        /></a>
      </li>
      <li>
        <a href="#"
          ><img src="~@/assets/images/basic/icon_line.svg" alt="line"
        /></a>
      </li>
      <li>
        <a href="#"
          ><img src="~@/assets/images/basic/icon_youtube.svg" alt="youtube"
        /></a>
      </li>
      <li>
        <a href="#"
          ><img
            src="~@/assets/images/basic/icon_googleplus.svg"
            alt="google plus"
        /></a>
      </li>
      <li>
        <a href="#"
          ><img src="~@/assets/images/basic/icon_instagram.svg" alt="instagram"
        /></a>
      </li>
      <li>
        <a href="#"
          ><img src="~@/assets/images/basic/icon_linkedin.svg" alt="LinkedIn"
        /></a>
      </li>
      <li>
        <a href="#"
          ><img src="~@/assets/images/basic/icon_rss.svg" alt="RSS"
        /></a>
      </li>
    </ul>
  </div>
</template>
