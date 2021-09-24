<script>
import $ from "jquery";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      /*-----------------------------------*/
      //////////// notice訊息區塊 ////////////
      /*-----------------------------------*/
      $('[class*="notice"] a.close').click(function(e) {
        $(this)
          .parent('[class*="notice"]')
          .hide();
        e.preventDefault();
      });
    });
  },
};
</script>
<template>
  <div class="notice">
    這是一般提醒訊息區塊
    <a href="#" class="close"
      ><img src="@/assets/images/basic/icon_close.svg" alt=""
    /></a>
  </div>
  <div class="notice_info">
    這是一般提醒訊息區塊
    <a href="#" class="close"
      ><img src="@/assets/images/basic/icon_close.svg" alt=""
    /></a>
  </div>
  <div class="notice_success">
    您已經成功登入
    <a href="#" class="close"
      ><img src="@/assets/images/basic/icon_close.svg" alt=""
    /></a>
  </div>
  <div class="notice_warning">
    這似乎不是一個正常的Email格式
    <a href="#" class="close"
      ><img src="@/assets/images/basic/icon_close.svg" alt=""
    /></a>
  </div>
  <div class="notice_error">
    您輸入的帳號密碼有誤！
    <a href="#" class="close"
      ><img src="@/assets/images/basic/icon_close.svg" alt=""
    /></a>
  </div>
</template>

<style lang="scss"></style>
