<script>
import $ from "jquery";
import HyLanguage from "@/components/HyLanguage.vue";
import { onMounted } from "@vue/runtime-core";
export default {
  components: {
    HyLanguage,
  },
  setup() {
    onMounted(() => {
      /*-----------------------------------*/
      //////////// nav如果有兩個選單///////////
      /*-----------------------------------*/
      var _navLength = $(".navigation ul").length;
      if (_navLength > 1) {
        $(".navigation ul:nth-child(1)").addClass("left_nav");
      }
      $(".navigation")
        .has(".language")
        .addClass("have_language");
    });
    return {};
  },
};
</script>
<template>
  <!-- navigation Start -->
  <nav class="navigation">
    <!-- 一組ul預設靠右 -->
    <!-- 兩組ul已寫JQ靠左靠右 -->
    <ul>
      <li><a href="#">回首頁</a></li>
      <li><a href="#">網站導覽</a></li>
      <li><a href="#">English</a></li>
      <li><a href="#">常見問答</a></li>
    </ul>
    <ul>
      <li><a href="#">第二組導覽</a></li>
      <li><a href="#">第二組導覽</a></li>
      <li><a href="#">第二組導覽</a></li>
    </ul>
    <HyLanguage />
  </nav>
  <!-- navigation End -->
</template>

<style lang="scss"></style>
