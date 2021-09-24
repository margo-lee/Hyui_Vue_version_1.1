<script>
import { onMounted } from "@vue/runtime-core";
import $ from "jquery";
export default {
  setup() {
    onMounted(() => {
      /*-----------------------------------*/
      /////////////modal設定/////////////
      /*-----------------------------------*/
      $(function() {
        $("#modal1").hide(); //先隱藏視窗
        $(".modal").after('<div class="modal_overlay"></div>'); //新增透明底
        $(".modal").prepend(
          '<button type="button" class="close">關閉</button>'
        ); //新增關閉按鈕
        $(".modal_overlay").hide(); //隱藏透明底
        //按鈕動作
        $("#openModal").click(function(e) {
          $(".modal_overlay").fadeIn(100);
          $(".modal").fadeIn(100);
          $("body").addClass("noscroll");
          e.preventDefault();
        });
        //關閉function
        function closeModal() {
          $("#modal1").hide();
          $(".modal_overlay").hide();
          $("body").removeClass("noscroll");
        }
        //點選關閉按鈕及透明底都可關閉
        $(".modal_overlay").click(closeModal);
        $(".modal .close").click(closeModal);
      });
    });
  },
};
</script>
<template>
  <!--按鈕-->
  <button type="button" id="openModal" class="btn">開啟視窗</button>
  <!--視窗-->
  <div id="modal1" class="modal">
    // div內的內容可以自行設定
    <h2>標題</h2>
    <p>內文</p>
  </div>
</template>

<style lang="scss"></style>
